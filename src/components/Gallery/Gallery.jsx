import './style.css';
import styled from 'styled-components';
import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

export default function Gallery({ images, width, height, radius, showThumbs }) {
    const [index, setIndex] = useState(0);
    const totalSlides = images.length;
    const previewRef = useRef(null);

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
                className={`nav-dot navegacao ${index === i ? 'active' : ''}`}
                onClick={() => setIndex(i)}
            ></div>
        ));
    }
    function showSlideBanner() {
        return (
            <div className="slide" id="slide-0" key={0}>
                <div className="item-slide">
                    <div className="containerSlideOne d-flex flex-row">
                        <div className="row">
                            <div className="col-6 d-flex align-items-center">
                                <div className="info">
                                    <p className="text-small-bold-warning">Melhores ofertas personalizadas</p>
                                    <h1>Queima de stoque Nike 🔥</h1>
                                    <p className="text-medium">Consequat culpa exercitation mollit nisi excepteur do do
                                        tempor laboris eiusmod
                                        irure consectetur.</p>
                                    <Link to={'/Produtos'}>
                                        <button className="btn-ofertas text-small-bold">Ver Ofertas</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-6 d-flex align-items-center justify-content-center">
                                <img src={'sapato-banner.svg'} className="banner-img" alt="Nike Air" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const Banner = styled.div`
        position: relative;
        background-image: url(${props => props.src});
        width: ${width != undefined ? width + 'px' : '100vw'}; 
        height: ${height != undefined ? height + 'px' : '100%'};
        background-size: cover; 
        background-position: center; 
        border-radius: ${radius}px;
    `;

    const PreviewSlides = styled.div`
    width: ${width}px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 27.99px;
    overflow: hidden;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
    function showDotsImage() {
        return (
            <PreviewSlides ref={previewRef}>
                {images.map((image, idx) => (
                    <img src={image.src} className={`item-produto ${idx == index ? 'active' : ''}`} onClick={() => setIndex(idx)} alt="item produto" draggable="false" id={`img-item-dot-${idx}`} key={idx} />
                ))}
            </PreviewSlides>)
    }
    function showArrowsInPage() {
        return (
            <>
                <img src={'vectorArrow.svg'} className='arrow prev' onClick={() => previewSlide()} alt="imagem anterior" />
                <img src={'vectorArrow.svg'} className='arrow next' onClick={() => nextSlide()} alt="proxima imagem" />
            </>
        )
    }
    useEffect(() => {
        const slides = document.querySelector('.slides');
        slides.style.transform = `translateX(-${index * 100}%)`;
    }, [index]);

    useEffect(() => {
        const previewDiv = previewRef.current;
        const handleWheel = (event) => {
            if (event.deltaY !== 0) {
                event.preventDefault();
                previewDiv.scrollLeft += event.deltaY;
            }
        };

        if (previewDiv) {
            previewDiv.addEventListener('wheel', handleWheel);
        }

        return () => {
            if (previewDiv) {
                previewDiv.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);
    const Slider = styled.div`
        max-width: ${width}px;
        overflow: hidden;
    
    `
    return (
        <Slider className="slider">
            <div className="slides">
                {/* primeiro Slide */}
                {showThumbs != true ? showSlideBanner() : console.log('Arquivos Carregados')}
                
                {/* restante */}
                {images.map((image, idx) => (
                    <div className="slide" id={`slide-${idx+1}`} key={idx+1}>
                        <Banner src={image.src}>
                            <div className="item-slide">
                                <div className="container d-flex flex-row">
                                    <div className="d-flex align-items-center">
                                    </div>
                                </div>
                            </div>
                            {showThumbs != true ? null : showArrowsInPage()}
                        </Banner>
                    </div>
                ))}
            </div>



            <div className='d-flex justify-content-center align-items-center'>
                {showThumbs != true ? viewNavDots() : showDotsImage()}

            </div>

        </Slider>
    );
}
