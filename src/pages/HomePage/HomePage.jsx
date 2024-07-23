import React from 'react';
import Gallery from './../../components/Gallery/Gallery';
import ProductConection from '../../components/ProductConection/ProductConection';

import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';


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
  let produtos = [
    {
      name: "Nome do produto 1",
      image: "produc-image-1.jpeg",
      price: 200,
      priceDiscount: 50
    },
    {
      name: "Nome do produto 2",
      image: "produc-image-1.jpeg",
      price: 49.9
    },
    {
      name: "Nome do produto 2",
      image: "produc-image-1.jpeg",
      price: 49.9
    },
    {
      name: "Nome do produto 2",
      image: "produc-image-1.jpeg",
      price: 49.9
    },
    {
      name: "Nome do produto 2",
      image: "produc-image-1.jpeg",
      price: 49.9
    },
    {
      name: "Nome do produto 2",
      image: "produc-image-1.jpeg",
      price: 49.9
    },
    {
      name: "Nome do produto 2",
      image: "produc-image-1.jpeg",
      price: 49.9
    }
  ];
  return (
    <div>
      <Gallery images={imgs} height='900' />
      <ProductConection />
      <Section>
        <ProductListing products={ produtos } />
      </Section>
    </div>
  );
};

export default HomePage;