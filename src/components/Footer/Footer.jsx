import React from 'react';
import "./style.css"
import { Link } from 'react-router-dom';

// IMPORTANTE!: nome da classNamee em maiusculo
function Footer(){
  return (
    <div>
        <footer className='d-flex justify-content-center'>
        <div className="footerContainer">
            <div className="row">
                <div className="col-5"> <img className="footerLogo" src="logo-footer.svg" alt="logo-digital-store"/>

                    <p className="descricao">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et
                        dolore.
                    </p>

                    <div className="icones">
                        <img src="facebook.svg" alt="icon-facebook"/>
                        <img src="instagram.svg" alt="icon-instagram"/>
                        <img src="twitter.svg" alt="icon-twitter"/>
                    </div>
                </div>
                
                <div className="col">
                    <div className="infoDiv">
                        <h1 className="infoTitulo" >Informação</h1>
                        <p className="infoLinks">
                           <Link to="/" className='link'>Sobre Drip Store</Link>
                           <Link to="/" className='link'>Segurança</Link>
                           <Link to="/" className='link'>Wishlist</Link>
                           <Link to="/" className='link'>Blog</Link>
                           <Link to="/" className='link'>Trabalhe conosco</Link>
                           <Link to="/" className='link'>Meus Pedidos</Link>
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="categoriasDiv">
                        <h1 className="categoriasTitulo">Categorias</h1>
                        <p className="categoriasLinks">
                           <Link to="/" className='link'>Camisetas</Link>
                           <Link to="/" className='link'>Calças</Link>
                           <Link to="/" className='link'>Bonés</Link>
                           <Link to="/" className='link'>Headphones</Link>
                           <Link to="/" className='link'>Tênis</Link>
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="contatoDiv">
                        <h1 className="contatoTitulo">Contato</h1>
                        <p className="contatoEndereco">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                        <p className="contatoNumero">(85) 3051-3411</p>

                    </div>
                </div>












               


            </div>
            
            <div className="linha"><hr/></div>

            <div className="copyrightFooter ">
                <p>
                    @ 2024 Digital College
                </p>
            </div>
        </div>

    </footer>

    </div>
  );
}

export default Footer;