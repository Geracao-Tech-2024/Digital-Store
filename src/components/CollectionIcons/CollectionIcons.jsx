import { Link } from "react-router-dom";
import "./CollectionIcons.css";
function CollectionIcons() {
  return (
    <>
      <div className="container">
        <div className="itens">
          <Link to={'/Produto'}>
            <div className="imgBack">
              <img className="icons" src="tshirt.png" alt="icone-camisa" />
            </div>
            <div className="sub-titulo">
              <p className="subDesc">Camisetas</p>
            </div>
          </Link>
        </div>
        <div className="itens">
          <Link to={'/Produto'}>
            <div className="imgBack">
              <img className="icons" src="Pants.png" alt="icone-calça" />
            </div>
            <div className="sub-titulo">
              <p className="subDesc">Calças</p>
            </div>
          </Link>
        </div>
        <div className="itens">
          <Link to={'/Produto'}>
            <div className="imgBack">
              <img className="icons" src="Pants.png" alt="icone-calça" />
            </div>
            <div className="sub-titulo">
              <p className="subDesc">Bonés</p>
            </div>
          </Link>
        </div>
        <div className="itens">
          <Link to={'/Produto'}>
            <div className="imgBack">
              <img className="icons" src="headphone.png" alt="icone-headset" />
            </div>
            <div className="sub-titulo">
              <p className="subDesc">Headphone</p>
            </div>
          </Link>
        </div>
        <div className="itens">
          <Link to={'/Produto'}>
            <div className="imgBack">
              <img className="icons" src="tenis.png" alt="icone-tenis" />
            </div>
            <div className="sub-titulo">
              <p className="subDesc">Tenis</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CollectionIcons;
