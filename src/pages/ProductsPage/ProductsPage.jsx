import styled from "styled-components";
import FilterOrdenate from "../../components/FilterOrdenate/FilterOrdenate";
import ProductListing from "../../components/ProductListing/ProductListing";

function ProductsPage() {
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
    const ProductsContainer = styled.div`
        width: 90vw;
        margin: auto;
    `
    let headLinks = document.getElementsByClassName('link');
    let atualLink = document.getElementsByClassName('link-active');
    // headLinks.map((e)=>{
    //     console.log(e)
    // })
    atualLink.className = 'link'
    console.log(headLinks)
    return (
        <ProductsContainer>
            <div className="row">
                    <FilterOrdenate />
            </div>
            <div className="row mt-5">
                <div className="col">
                    filtro
                </div>
                <div className="col-8">
                    <ProductListing products={produtos} />
                </div>
            </div>
        </ProductsContainer>
    )
}
export default ProductsPage;