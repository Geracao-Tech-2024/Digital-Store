import "./CollectionIcons.css";
function CollectionIcons() {
  return (
    <>
      <div className="colection-tittle">
        <h2>Coleções em destaque</h2>
      </div>
      <div className="container">
        <div className="itens">
          <div className="imgBack">
            <img className="icons" src="tshirt.png" alt="icone-camisa" />
          </div>
          <div className="sub-titulo">
            <p className="subDesc">Camisetas</p>
          </div>
        </div>
        <div className="itens">
          <div className="imgBack">
            <img className="icons" src="Pants.png" alt="icone-calça" />
          </div>
          <div className="sub-titulo">
            <p className="subDesc">Calças</p>
          </div>
        </div>
        <div className="itens">
          <div className="imgBack">
            <img className="icons" src="Pants.png" alt="icone-calça" />
          </div>
          <div className="sub-titulo">
            <p className="subDesc">Bonés</p>
          </div>
        </div>
        <div className="itens">
          <div className="imgBack">
            <img className="icons" src="headphone.png" alt="icone-headset" />
          </div>
          <div className="sub-titulo">
            <p className="subDesc">Headphone</p>
          </div>
        </div>
        <div className="itens">
          <div className="imgBack">
            <img className="icons" src="tenis.png" alt="icone-tenis" />
          </div>
          <div className="sub-titulo">
            <p className="subDesc">Tenis</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollectionIcons;
