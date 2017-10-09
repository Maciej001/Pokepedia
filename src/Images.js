import React, { Component } from 'react';

const Images = ({images}) => (
  <div className='images'>
    {images.map( image =>
      <div>
        <span>{image.id}</span>
        <img key={image.id} src={image.url} />
      </div>
    )}
  </div>

);

export default Images;
