import React, { useEffect } from 'react';

import css from './Modal.module.css';

const Modal = ({ largeImage, onClose }) => {
  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={css.Overlay} onClick={handleOverlayClick}>
      <div className={css.Modal}>
        <img src={largeImage} alt="" onClick={(e) => e.stopPropagation()} />
      </div>
    </div>
  );
};

export { Modal };