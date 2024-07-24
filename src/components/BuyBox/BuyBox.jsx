import './buybox.css'

export default function BuyBox(props) {
  return (
    <div className="containerBuy">
      <div className="by-text">
        <h3>{props.name}</h3> 
        <p>{props.description}</p> 
        <div className="avaliacao">
          <div className="img">
            {props.stars.map((star, index) => (
              <img key={index} src={star} alt="" />
            ))} 
          </div>
          <div className="notas">
            <span>{props.rating} <img src="Star-white.svg" alt="" /></span>
            <p>({props.reviewsCount} avaliações)</p> 
          </div>
        </div>
        <div className="preco">
          <p><span>R$</span> {props.discountPrice}</p> 
          <p>R${props.price}</p> 
        </div>
        <div className="descr">
          <span>Descrição do produto</span>
          <p>{props.productDescription}</p> 
        </div>
        <div className="tamanho">
          <span>Tamanho</span>
          <div className="tamanhos">
            {props.sizes.map((size, index) => (
              <span key={index}>{size}</span>
            ))} 
          </div>
        </div>
        <div className="cor">
          <span>Cores</span>
          <div className="cores">
           
                {props.colors.map((color, index) => (
                <button key={index} id={color}></button>
                ))} 
            
           
          </div>
        </div>
        <div className="by-btn">
          <button className="comprar">COMPRAR</button>
        </div>
      </div>
    </div>
  )
}
