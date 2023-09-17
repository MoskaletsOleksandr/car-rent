import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseSVG, ModalBackdrop, ModalContent } from './Modal.styled';
import sprite from '../../../images/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code !== 'Escape') {
        return;
      }
      onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <CloseSVG
          width={24}
          height={24}
          onClick={() => {
            onClose();
          }}
        >
          <use href={sprite + '#icon-close'}></use>
        </CloseSVG>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
