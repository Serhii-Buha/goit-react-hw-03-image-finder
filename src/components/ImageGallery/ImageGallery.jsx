import PropTypes from 'prop-types';
import { List } from 'components/ImageGallery/ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

// photos массив обьектов
// export const ImageGallery = ({ photos, onClick }) => {
//   return (
//     <List>
//       {photos.hits.map(({ id, webformatURL, largeImageURL, tags }) => (
//         <ImageGalleryItem
//           key={id}
//           onClick={onClick}
//           webformatURL={webformatURL}
//           largeImageURL={largeImageURL}
//           tags={tags}
//         />
//       ))}

//       {/* {photos.hits.map(({id, webformatURL, largeImageURL }) => (
//           <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} onClick={()=> } />
//       ))} */}
//       {/* <ImageGalleryItem onClick={onClick} /> */}
//       {/* <!-- Набор <li> с изображениями --> */}
//     </List>
//   );
// };

export const ImageGallery = ({ photos, onClick }) => {
  return (
    <List>
      {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          onClick={onClick}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
