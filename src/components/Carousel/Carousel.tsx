import React, { useState } from 'react';
import './Carousel.css';
// import { imagesList } from '../../assets/data/sliderData.js';

interface Image {
  src: string;
  alt: string;
}

const Carousel: React.FC = () => {
  const images: Image[] = [
    { src: '/assets/data/foto1.jpg', alt: 'Imagen de reforma' },
    { src: '/assets/data/foto2.jpg', alt: 'Imagen de baño' },
    { src: '/assets/data/foto3.jpg', alt: 'Imagen de cocina' },
    { src: '/assets/data/foto4.jpg', alt: 'Imagen de cocina' },
    { src: '/assets/data/foto5.jpg', alt: 'Imagen de cocina' },
    { src: '/assets/data/foto6.jpg', alt: 'Imagen de cocina' },
    // { src: '/assets/data/foto8.jpg', alt: 'Imagen de cocina' },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="carousel">
      <div className="carousel-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <button className="carousel-btn prev" onClick={prevImage}>
        &#10094;
      </button>
      <button className="carousel-btn next" onClick={nextImage}>
        &#10095;
      </button>
    </section>
  );
};

export default Carousel;
