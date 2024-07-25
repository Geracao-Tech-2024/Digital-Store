
import { Link } from 'react-router-dom';
import "./HeaderStyle.css"

function Header() {
  return (
    <header className="boxheader">
      <div className='configContainer'>
        <div className='row d-flex align-items-center'>
          <div className='col-10 d-flex justify-content-between'>
            <Link to="/">
              <img src="/logoHeader.svg" alt="LogoDigital" className='logo' />
            </Link>

            <input type="text" placeholder='Pesquisar produto...' className='inputPesquisa' />
            <a href="" className='text-dark d-flex align-items-center'>Cadastra-se</a>
          </div>

          <div className='col'>
            <button className='estilobotton'>Entrar</button>
          </div>

          <div className='col d-flex align-items-center'>
            <div className='configCar'>
              <div>
                <img src="/HeaderCar.svg" alt="Carrinho" />
                <div className='iconCarrinho'>0</div>
              </div>

            </div>
          </div>
        </div>

        <div className='row py-2'>
          <div className='col py-4'>
            <nav>
              <Link to="/" className="link active">Home</Link>
              <Link to="/Produtos" className="link">Produtos</Link>
              <Link to="/Categorias" className="link">Categorias</Link>
              <Link to="/Meus Produtos" className="link">Meus Pedidos</Link>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;