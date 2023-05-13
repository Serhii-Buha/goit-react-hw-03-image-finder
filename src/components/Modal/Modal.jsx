import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from 'components/Modal/Modal.styled';
// import css from 'components/Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

// render() {
//     return createPortal(
//       // <div className={css.Overlay}>
//       <div className={css.Overlay} onClick={this.handleBackdropClick}>
//         <div className={css.Modal}>
//           {this.props.children}
//           <img src="" alt="" />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

/* <div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>; */
