// src/ImageModal.js
import React from 'react';
import './ImageModal.css';

const ImageModal = ({ image, onClose, onNext, onPrevious }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={onClose}>&times;</span>
                <img src={image} alt="modal" className="modal-image" />
                <button className="nav-button prev-button" onClick={onPrevious}>&#10094;</button>
                <button className="nav-button next-button" onClick={onNext}>&#10095;</button>
            </div>
        </div>
    );
};

export default ImageModal;
