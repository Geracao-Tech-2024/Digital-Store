import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styled from 'styled-components';
// Definindo o componente de ProductListing 
function ProductListing({ products }) {
    const ListingContainer = styled.div`
        display:flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: center; 
        .list-produtos{
            width: 90vw;
            display: flex;
            flex-direction:row;
            flex-wrap: wrap;
            gap: ;
        }
    `;
    return (
        <ListingContainer>
            <div className="list-produtos">

                {products.map(produto => {
                    return (
                        <ProductCard imagem={produto.image} name={produto.name} price={produto.price} {...(produto.priceDiscount && { priceDiscount: produto.priceDiscount })} />
                    )
                })}
            </div>
        </ListingContainer>
    );
};

export default ProductListing;