import "./CollectionIcons.css";
function CollectionIcons() {
  return (
    <>
      <div className="titulo">
        <h2>Coleções em destaque</h2>
      </div>
      <div className="container">
        <div className="itens">
          <div className="imgBack">
            <img src="tshirt.png" alt="icone-camisa" />
          </div>
          <div className="sub-titulo">
            <h3>Camisetas</h3>
          </div>
        </div>
        <div className="itens">
          <div className="imgBack">
            <img src="Pants.png" alt="icone-calça" />
          </div>
          <div className="sub-titulo">
            <h3>Calças</h3>
          </div>
        </div>
        <div className="itens">
          <div className="imgBack">
            <img src="Pants.png" alt="icone-calça" />
          </div>
          <div className="sub-titulo">
            <h3>Bonés</h3>
          </div>
        </div>
        <div className="itens">
          <div className="imgBack">
            <img src="headphone.png" alt="icone-headset" />
          </div>
          <div className="sub-titulo">
            <h3>Headphone</h3>
          </div>
        </div>
        <div className="itens">
          <div className="imgBack">
            <img src="tenis.png" alt="icone-tenis" />
          </div>
          <div className="sub-titulo">
            <h3>Tenis</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollectionIcons;
