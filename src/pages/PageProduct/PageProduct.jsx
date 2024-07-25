import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import BuyBox from '../../components/BuyBox/BuyBox';
import styled from 'styled-components';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';

// IMPORTANTE!: nome da classe em maiusculo
function PageProduct() {
  let imagensProduto = [
    { src: 'produc-image-1.jpeg' },
    { src: 'produc-image-2.jpeg' },
    { src: 'produc-image-3.jpeg' },
    { src: 'produc-image-4.jpeg' },
    { src: 'produc-image-5.jpeg' },
  ]

  const product = {
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    description: 'Casual | Nike | REF:38416711',
    stars: ['Star 01.svg', 'Star 02.svg', 'Star 03.svg', 'Star 04.svg', 'Star-border.svg'],
    rating: '4.7',
    reviewsCount: '90',
    discountPrice: '219,00',
    price: '219,00',
    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    sizes: ['39', '40', '41', '42', '43'],
    colors: ['azul', 'rosa', 'black', 'roxa']
  };
  const PageProductConteiner = styled.div`
      display: flex;
      flex-direction: column;
      width: 90vw;
      margin: auto;
    `
  const ItemProduto = styled.div`
    display: flex;
    margin-bottom: 80px;
    gap: 40px;
  `
  const produtos = [
    {
      name: "Nome do produto 2",
      image: "product-thumb-5.jpeg",
      price: 49.9
    },
    {
      name: "Nome do produto 2",
      image: "product-thumb-1.jpeg",
      price: 49.9
    },
    {
      name: "Nome do produto 2",

      image: "product-thumb-2.jpeg",
      price: 49.9
    },
    {
      name: "Nome do produto 2",
      image: "product-thumb-3.jpeg",
      price: 49.9
    },
  ]
  return (
    <PageProductConteiner>
      <ItemProduto>
        <Gallery images={imagensProduto} radius='0' width='700' height='500' showThumbs />
        <BuyBox
          name={product.name}
          description={product.description}
          stars={product.stars}
          rating={product.rating}
          reviewsCount={product.reviewsCount}
          discountPrice={product.discountPrice}
          price={product.price}
          productDescription={product.productDescription}
          sizes={product.sizes}
          colors={product.colors}
        />
      </ItemProduto>
      <Section title={'Produtos Relacionados'} link={{ text: 'Ver todos', href: '/produtos' }}>
        <ProductListing products={produtos} />
      </Section>
    </PageProductConteiner>
  );
};

export default PageProduct;