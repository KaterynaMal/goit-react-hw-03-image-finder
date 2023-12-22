import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({image, onClick}) => {
  return (
    <div>  <li className={css.ImageGalleryItem}>
      <img src={image.webformatURL} alt={image.id} onClick={onClick} className={css.ImageGalleryItem_image} />
    </li>
    </div>

  
  )
}

export { ImageGalleryItem };
