import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import css from './modal.module.css';

const Modal = props => {
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.keyCode === 27) {
        props.onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.addEventListener('keydown', handleKeyPress);
    };
  }, [props]);
  return (
    <div id="modal" onClick={props.onClickClose} className={css.Overlay}>
      <div className={css.Modal}>
        <img
          className={css.Largeimg}
          src={props.largeImageUrl}
          alt={props.id}
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClickClose: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};

export default Modal;
