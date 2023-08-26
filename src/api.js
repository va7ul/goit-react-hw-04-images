import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38290749-a2ba3d07cb211d325e34a4328';

export const fetchImages = async (searchQuery, page, per_page) => {
  try {
    const response = await axios.get(
      `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
