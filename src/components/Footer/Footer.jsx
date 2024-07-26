import React from 'react';
import "./style.css"
import { Link } from 'react-router-dom';

// IMPORTANTE!: nome da classNamee em maiusculo


function Footer() {
    function InfoSection({ title, informations }) {
      return (
        <div className="infoDiv">
          <h1 className="infoTitulo">{title}</h1>
          <p className="infoLinks">
            {informations.map((info, index) => (
              info.link ? (
                <Link key={index} to={info.link} className='link'>{info.text}</Link>
              ) : (
                <span key={index}>{info.text}</span>
              )
            ))}
          </p>
        </div>
      );
    }
  
    const infoData = [
      { text: "Sobre Drip Store", link: "/" },
      { text: "Segurança", link: "/" },
      { text: "Wishlist", link: "/" },
      { text: "Blog", link: "/" },
      { text: "Trabalhe conosco", link: "/" },
      { text: "Meus Pedidos", link: "/" }
    ];
  
    const categoriasData = [
      { text: "Camisetas", link: "/" },
      { text: "Calças", link: "/" },
      { text: "Bonés", link: "/" },
      { text: "Headphones", link: "/" },
      { text: "Tênis", link: "/" }
    ];
  
    const contactData = [
      { text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161" },
      { text: "(85) 3051-3411" }
    ];
  
    return (
      <div>
        <footer className='d-flex justify-content-center'>
          <div className="footerContainer">
            <div className="row">
              <div className="col-5">
                <img className="footerLogo" src="logo-footer.svg" alt="logo-digital-store"/>
                <p className="descricao">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <div className="icones">
                  <img src="facebook.svg" alt="icon-facebook"/>
                  <img src="instagram.svg" alt="icon-instagram"/>
                  <img src="twitter.svg" alt="icon-twitter"/>
                </div>
              </div>
              <div className="col">
                <InfoSection title="Informação" informations={infoData} />
              </div>
              <div className="col">
                <InfoSection title="Categorias" informations={categoriasData} />
              </div>
              <div className="col">
                <InfoSection title="Contato" informations={contactData} />
              </div>
            </div>
            <div className="linha"><hr/></div>
            <div className="copyrightFooter ">
              <p>@ 2024 Digital College</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  

export default Footer;