import React from 'react';
import Gallery from './../../components/Gallery/Gallery';
import ProductConection from '../../components/ProductConection/ProductConection';

// IMPORTANTE!: nome da classe em maiusculo
function HomePage() {
  let imgs = [
    { src: 'home-slide-1.jpeg' },
    { src: 'home-slide-2.jpeg' },
    { src: 'home-slide-3.jpeg' },
    { src: 'home-slide-4.jpeg' },
    { src: 'home-slide-5.jpeg' },
    { src: 'home-slide-6.jpeg' },
    { src: 'home-slide-7.jpeg' },
    { src: 'home-slide-8.jpeg' }
  ]
  return (
    <div>
        <Gallery images={imgs} height='900'/>
        <ProductConection/>
      </Section>
      
    </div>
  );
};

export default HomePage;