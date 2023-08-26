import { GalleryItemImage } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { ModalWindow } from '../Modal/Modal.jsx';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const {
      image: { largeImageURL, webformatURL, tags },
    } = this.props;
    return (
      <>
        <GalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={this.openModal}
        />

        <ModalWindow
          isOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
          src={largeImageURL}
          tags={tags}
        />
      </>
    );
  }
}
