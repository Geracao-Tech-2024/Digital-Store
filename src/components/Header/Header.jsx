import React from 'react';
import "./HeaderStyle.css"

function Header() {
  return (
    <header className="boxheader">
      <div className='configContainer'>
        <div className='row d-flex align-items-center'>
          <div className='col-9 d-flex justify-content-between'>
            <img src="/public/logoHeader.svg" alt="LogoDigital" className='logo' />
            <input type="text" placeholder='Pesquisar produto...' className='inputPesquisa' />
            <a href="" className='text-dark d-flex align-items-center'>Cadastra-se</a>
          </div>

          <div className='col'>
            <button className='estilobotton'>Entrar</button>
          </div>

          <div className='col d-flex align-items-center px-2'>
            <div className='configCar'>
              <img src="/public/HeaderCar.svg" alt="Carrinho" />
            </div>

            <div className='iconCarrinho'>0</div>
          </div>
        </div>

        <div className='row py-2'>
          <div className='col py-4'>
            <nav>
              {/* <Link to="/Home" className="link">Home</Link>
              <Link to="/Produtos" className="link">Produtos</Link>
              <Link to="/Categorias" className="link"></Link>
              <Link to="/Meus Produtos" className="link"></Link> */}
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;