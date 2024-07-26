import React from 'react';
import "./style.css"

// IMPORTANTE!: nome da classNamee em maiusculo
function ProductCard({ imagem, name, price, priceDiscount }) {
  let Vldesconto = price*(priceDiscount/100);
  function desconto(){
    return (
      <div className="desconto">
            <div className="descontoTexto" >{priceDiscount}% OFF</div>

          </div>
    )
  }
  return (
    <div>
      <div className="cardContainer">

        <div className="cardBackground">
          <img className="cardImagem" src={imagem} alt="imagem-produto"/> 
          {priceDiscount != undefined? desconto(): null }

        </div>

        <p className="cardTenis">Tênis</p>
        <p className="nomeProduto">{name}</p>
    <p className={ `${priceDiscount != undefined? "preco" : 'd-none'}`}>${price}</p>  <p className="precoMetade">${Vldesconto ? price - Vldesconto : price}</p>



      </div>



    </div>
  );
};

export default ProductCard;