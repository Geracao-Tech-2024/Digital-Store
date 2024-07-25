import React from "react";
import Gallery from "./../../components/Gallery/Gallery";
import ProductConection from "../../components/ProductConection/ProductConection";

import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import CollectionIcons from "../../components/CollectionIcons/CollectionIcons";

import styled from "styled-components";
import Promotion from "../../components/Promotion/promotion";

// IMPORTANTE!: nome da classe em maiusculo
function HomePage() {
  let imgs = [
    { src: "home-slide-1.jpeg" },
    { src: "home-slide-2.jpeg" },
    { src: "home-slide-3.jpeg" },
    { src: "home-slide-4.jpeg" },
    { src: "home-slide-5.jpeg" },
    { src: "home-slide-6.jpeg" },
    { src: "home-slide-7.jpeg" },
    { src: "home-slide-8.jpeg" },
  ];
  let produtos = [
    {
      name: "Nome do produto 1",
      image: "product-thumb-1.jpeg",
      price: 200,
      priceDiscount: 50,
    },
    {
      name: "Nome do produto 1",
      image: "product-thumb-2.jpeg",
      price: 200,
      priceDiscount: 50
    },
    {
      name: "Nome do produto 1",
      image: "product-thumb-3.jpeg",
      price: 200,
      priceDiscount: 50
    },
    {
      name: "Nome do produto 1",
      image: "product-thumb-4.jpeg",
      price: 200,
      priceDiscount: 50
    },
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
  ];
  const ContainerHomePage = styled.div`
    display: flex;
    align-content: space-around;
    flex-direction: column;
    background-color: var(--light-gray-3);
    .produtoDestaqueImg{
      margin-bottom: 100px;
    }
  `;
  return (
    <ContainerHomePage>
      <Gallery images={imgs} height="900" />
      <Section title={'Coleções em destaque'}>
        <ProductConection />
      </Section>
      <CollectionIcons />

      <Section title={'Produtos em alta'} link={{ href: '/produtos', text: 'Ver tordos' }}>
        <ProductListing products={produtos} />
      </Section>
      <Promotion />
    </ContainerHomePage>
  );
}

export default HomePage;
