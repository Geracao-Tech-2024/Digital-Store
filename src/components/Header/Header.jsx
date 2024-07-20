import React from 'react';
import "./HeaderStyle.css"

function Header() {
  return (
    <header className="boxheader">
      <div className="container p-3">
        <div className="row d-flex align-items-center">
          <div className="col-10 d-flex justify-content-between">
            <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="LogoDigital" className="logo" />
            <input type="text" placeholder="Pesquise Aqui...." className="inputPesquisa" />
            <a href="" className="text-dark d-flex align-items-center">Cadastra-se</a>
          </div>

          <div className="col">
            <button className="estilobotton">Entrar</button>
          </div>

          <div className="col d-flex align-items-center px-2">
            <img src="" alt="Carrinho Digital" className="iconCar"/>
          </div>
        </div>

        <div className="row">
          <div className="col py-4">
            <nav className="navbox">
              <Link to="/Home">Home</Link>
              <Link to="/Produtos">Produtos</Link>
              <Link to="/Categorias"></Link>
              <Link to="/Meus Produtos"></Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;