import React from 'react';
import Layout from './../Layout/Layout'
import ProductCard from '../../components/ProductCard/ProductCard';
// IMPORTANTE!: nome da classe em maiusculo
function HomePage(){
  return (
    <div>
        <Layout children={ProductCard}/>
    </div>
  );
};

export default HomePage;