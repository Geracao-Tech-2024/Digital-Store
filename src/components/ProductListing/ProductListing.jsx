import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

// Definindo o componente de ProductListing 
function ProductListing  ({ products }) {
    return (
        <div>
            <ProductCard/>
        </div>
    );
};

export default ProductListing ;