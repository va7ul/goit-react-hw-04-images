import { GalleryItemImage } from './ImageGalleryItem.styled';
import { ModalWindow } from '../Modal/Modal.jsx';
import { useState } from 'react';

export const ImageGalleryItem = ({
  image: { largeImageURL, webformatURL, tags },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <GalleryItemImage src={webformatURL} alt={tags} onClick={openModal} />

      <ModalWindow
        isOpen={isModalOpen}
        closeModal={closeModal}
        src={largeImageURL}
        tags={tags}
      />
    </>
  );
};
