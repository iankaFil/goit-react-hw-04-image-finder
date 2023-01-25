import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem';
import { PropTypes } from 'prop-types';
import css from './imageGallery.module.css';

const ImageGallery = ({ images, onModalOpen }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          onImgClick={onModalOpen}
          image={image}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onModalOpen: PropTypes.func.isRequired,
};

export default ImageGallery;
