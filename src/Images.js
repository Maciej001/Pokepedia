import React, { Component } from 'react';

const Image = ({url}) => {
  const style = {
    backgroundImage: `url("${url}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    overflow: "hidden",
    width: "19vw",
    marginRight: "1vw",
    height: "19vw",
    marginBottom: "1vw",
    cursor: "pointer",
  }

  return <div style={style}></div>
}

const Images = ({images}) => {
  if (!images)
    return null
  return (
    <div className='images'>
      {images.map( image =>
        <Image key={image.id} url={image.url} className='image'/>
      )}
    </div>
  )
};

export default Images;
