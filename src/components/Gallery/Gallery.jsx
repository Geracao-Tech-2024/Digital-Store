import './style.css'
import styled from 'styled-components';
import { useEffect, useState } from "react";

export default function Gallery({ images, width, height, radius, showThumbs }) {
    const [index, setIndex] = useState(0);
    const totalSlides = images.length;
    const slideWidth = 100;
    function nextSlide() {
        setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }

    function previewSlide() {
        setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    }

    function viewNavDots() {
        return Array.from({ length: totalSlides }, (value, i) => (
            <div
                key={i}
                className={`nav-dot ${index === i ? 'active' : ''}`}
                onClick={() => setIndex(i)}
            ></div>
        ));
    }

    useEffect(() => {
        const slides = document.querySelector('.slides');
        slides.style.transform = `translateX(-${index * slideWidth}%)`;
    }, [index]);

    const Banner = styled.div`
        background-image: url(${props => props.src});
        width: 100%; /* Ajuste conforme necessário */
        background-size: cover; /* Ajuste conforme necessário */
        background-position: center; /* Ajuste conforme necessário */

        border-radius: ${radius};
        width: ${width};
        height: ${height};
    `;

    function showSlideBanner() {
        return (
            // <div className="slide" id="slide-0" key={0}>
            //     <div className="item-slide">
            //         <div className="container d-flex flex-row">
            //             <div className="row">
            //                 <div className="col-6 d-flex align-items-center">
            //                     <div className="info">
            //                         <p className="text-small-bold-warning">Melhores ofertas personalizadas</p>
            //                         <h1>Queima de stoque Nike 🔥</h1>
            //                         <p className="text-medium">Consequat culpa exercitation mollit nisi excepteur do do
            //                             tempor laboris eiusmod
            //                             irure consectetur.</p>
            //                         <button className="btn-ofertas text-small-bold">Ver Ofertas</button>
            //                     </div>
            //                 </div>
            //                 <div className="col-6 d-flex align-items-center justify-content-center">
            //                     <img src={'sapato-banner.svg'} className="banner-img" alt="Nike Air" />
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
                <></>
            // </div>
        )
    }
    return (
        <div className="slider">
            <div className="slides">
            {showThumbs != true? showSlideBanner() : console.log('Arquivos Carregados')}

                {images.map((image, idx) => (
                    <div className="slide" id={`slide-${idx + 1}`} key={idx + 1}>
                        <Banner src={image.src}>
                            <div className="item-slide">
                                <div className="container d-flex flex-row">
                                    <div className="d-flex align-items-center">
                                        
                                    </div>
                                </div>
                            </div>
                        </Banner>
                    </div>
                ))}
            </div>
            <div className="navigation">
                {showThumbs != true? viewNavDots() : null}
                <div className="previewSlides">
                    <img src="produc-image-1.jpeg" className='item-produto active' alt="item produto" />
                    <img src="produc-image-1.jpeg" className='item-produto' alt="item produto" />
                    <img src="produc-image-1.jpeg" className='item-produto' alt="item produto" />
                    <img src="produc-image-1.jpeg" className='item-produto' alt="item produto" />
                    <img src="produc-image-1.jpeg" className='item-produto' alt="item produto" />
                </div>
            </div>
        </div>
    );
}