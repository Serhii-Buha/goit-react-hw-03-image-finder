import PropTypes from 'prop-types';
import { Li, Img } from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClick,
}) => {
  return (
    // <Li onClick={() => onClick()}>
    <Li onClick={() => onClick({ largeImageURL, tags })}>
      <Img src={webformatURL} alt={tags} />
    </Li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

/* <li class="gallery-item">
  <img src="" alt="" />
</li>; */

// export class ImageGalleryItem extends Component {
//   state = {
//     selectedImg: null,
//   };

//   setSelectedImg = () => {
//     this.setState({ selectedImg: this.props.largeImageURL });
//   };

//   closeModal = () => {
//     this.setState({ selectedImg: null });
//   };

//   render() {
//     const { selectedImg } = this.state;
//     const { webformatURL, largeImageURL, tags } = this.props;

//     return (
//       <Li onClick={this.setSelectedImg}>
//         <Img src={webformatURL} alt={tags} />
//       </Li>
//     );
//   }
// }
