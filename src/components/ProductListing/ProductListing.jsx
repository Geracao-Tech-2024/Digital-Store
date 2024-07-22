import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

// Definindo o componente de ProductListing 
function ProductListing({ products }) {
    return (
        <div>
            {products.map(produto => {

                return (<ProductCard imagem={produto.image} name={produto.name} price={produto.price} />)
            })}
        </div>
    );
};

export default ProductListing;