import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styled from 'styled-components';
// Definindo o componente de ProductListing 
function ProductListing({ products }) {
    const ListingContainer = styled.div`
        display:flex;
        flex-direction: row;

        align-items: center;
        justify-content: center;
    `;
    const Listing = styled.div`
            width: 90vw;
            display: flex;
            flex-direction:row;
            flex-wrap: wrap;
            gap: 20px;
    `;
    return (
        <ListingContainer>
            <Listing>

                {products.map(produto => {
                    return (
                        <ProductCard imagem={produto.image} name={produto.name} price={produto.price} {...(produto.priceDiscount && { priceDiscount: produto.priceDiscount })} />
                    )
                })}
            </Listing>
        </ListingContainer>
    );
};

export default ProductListing;