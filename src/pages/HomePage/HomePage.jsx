import React from 'react';
import Gallery from './../../components/Gallery/Gallery';
import ProductConection from '../../components/ProductConection/ProductConection';
import ProductCard from '../../components/ProductCard/ProductCard';

// IMPORTANTE!: nome da classe em maiusculo
function HomePage(){
  let imgs = [
      {src: 'home-slide-1.jpeg'},
      {src: 'home-slide-2.jpeg'},
      {src: 'home-slide-3.jpeg'},
      {src: 'home-slide-4.jpeg'},
      {src: 'home-slide-5.jpeg'},
      {src: 'home-slide-6.jpeg'},
      {src: 'home-slide-7.jpeg'},
      {src: 'home-slide-8.jpeg'}
    ]
  return (
    <div>
        <Gallery images={imgs} height='900'/>
        <ProductCard priceDiscount="30" imagem="Mask group.png" name="K-Swiss V8 - Masculino" price="100" />
        <ProductConection/>
    </div>
  );
};

export default HomePage;