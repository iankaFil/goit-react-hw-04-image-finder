import { Component } from 'react';
import { PropTypes } from 'prop-types';
import css from './modal.module.css';

class Modal extends Component {
  render() {
    return (
      <div id="modal" onClick={this.props.onClickClose} className={css.Overlay}>
        <div className={css.Modal}>
          <img
            className={css.Largeimg}
            src={this.props.largeImageUrl}
            alt={this.props.id}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = event => {
    if (event.keyCode === 27) {
      this.props.onClose();
    }
  };
}

Modal.propTypes = {
  onClickClose: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};

export default Modal;
