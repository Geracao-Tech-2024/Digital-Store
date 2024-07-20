import React from 'react';
import Gallery from './../../components/Gallery/Gallery';

// IMPORTANTE!: nome da classe em maiusculo
function HomePage(){
  let imgs = [
      // {src: 'home-slide-1.jpeg'},
      // {src: 'home-slide-2.jpeg'},
      // {src: 'home-slide-3.jpeg'},
      // {src: 'home-slide-4.jpeg'},
      // {src: 'home-slide-5.jpeg'},
      // {src: 'home-slide-6.jpeg'},
      // {src: 'home-slide-7.jpeg'},
      // {src: 'home-slide-8.jpeg'}
      {src: 'produc-image-1.jpeg'},
      {src: 'produc-image-2.jpeg'},
      {src: 'produc-image-3.jpeg'},
      {src: 'produc-image-4.jpeg'},
      {src: 'produc-image-5.jpeg'},
    ]
  return (
    <div>
        <Gallery images={imgs} radius='0' width='700' height='500' showThumbs/>
    </div>
  );
};

export default HomePage;