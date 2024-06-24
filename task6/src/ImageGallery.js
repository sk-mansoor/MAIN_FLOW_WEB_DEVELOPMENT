// src/ImageGallery.js
import React, { useState } from 'react';
import './ImageGallery.css';
import ImageModal from './ImageModal';

// Import images
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
// Add more imports as needed

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    // Add more images as needed
];

const ImageGallery = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const openModal = (index) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const showNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const showPreviousImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <img 
                    key={index} 
                    src={image} 
                    alt={`img-${index}`} 
                    onClick={() => openModal(index)} 
                    className="gallery-image"
                />
            ))}
            {selectedImageIndex !== null && 
                <ImageModal 
                    image={images[selectedImageIndex]} 
                    onClose={closeModal} 
                    onNext={showNextImage} 
                    onPrevious={showPreviousImage} 
                />
            }
        </div>
    );
};

export default ImageGallery;
