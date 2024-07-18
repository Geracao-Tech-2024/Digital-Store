import './style.css'
import { useEffect, useState } from "react";

export default function Gallery({ images }) {
    const [index, setIndex] = useState(0); // Corrigido: índice inicial deve ser 0
    const totalSlides = images.length; // Número total de slides
    const slideWidth = 100; // Largura de cada slide em percentagem (ou em pixels, conforme necessário)

    function nextSlide() {
        setIndex((prevIndex) => (prevIndex + 1) % totalSlides); // Avançar para o próximo slide circularmente
    }
    function previewSlide() {
        setIndex((prevIndex) => (prevIndex - 1) % totalSlides); // Voltar para o anterior slide circularmente
    }

    function updateNavDots() {
        return Array.from({ length: totalSlides }, (value , i) => (
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
        updateNavDots();
    }, [index]);


    return (
        <div className="slider">
            <div className="slides">
                {images.map((image, index) => (
                    <div className="slide" id="slide-1" key={index}>
                        <div className="item-slide">
                            <div className="container d-flex flex-row">
                                <div className="row">
                                    <div className="col-6 d-flex align-items-center">
                                        <div className="info">
                                            <p className="text-small-bold-warning">Melhores ofertas personalizadas</p>
                                            <h1>Queima de stoque Nike 🔥</h1>
                                            <p className="text-medium">Consequat culpa exercitation mollit nisi excepteur do do
                                                tempor laboris eiusmod
                                                irure consectetur.</p>
                                            <button className="btn-ofertas text-small-bold">Ver Ofertas</button>
                                        </div>
                                    </div>
                                    <div className="col-6 d-flex align-items-center justify-content-center">
                                        <img src={image.src} className="banner-img" alt="Nike Air" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="navigation">
                {updateNavDots()}
            </div>
        </div>
    );
}
