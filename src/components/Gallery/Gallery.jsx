import './style.css';
import styled from 'styled-components';
import { useEffect, useRef, useState } from "react";

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
    const Banner = styled.div`
        position: relative;
        background-image: url(${props => props.src});
        width: ${width != undefined ? width + 'px' : '100vw'}; 
        height: ${height != undefined ? height + 'px' : 'auto'};
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
        overflow: hidden;
        width: 100%;
        max-width: ${width};
    `
    const Slide = styled.div`
        max-width: ${width};
    `
    return (    
        <Slider>
            <div className="slides">

                {images.map((image, idx) => (
                    <Slide className="slide" id={`slide-${idx}`} key={idx}>
                        <Banner src={image.src}>
                            <div className="item-slide">
                                <div className="container d-flex flex-row">
                                    <div className="d-flex align-items-center">
                                    </div>
                                </div>
                            </div>
                            {showThumbs != true ? null: showArrowsInPage()}
                        </Banner>
                    </Slide>
                ))}
            </div>



            <div className='d-flex justify-content-center align-items-center'>
                {showThumbs != true ? viewNavDots() : showDotsImage()}

            </div>

        </Slider>
    );
}
