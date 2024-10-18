import React from 'react';

const Modal = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div style={{ position: 'relative', width: '300px', margin: '20% auto', padding: '20px', background: '#fff', textAlign: 'center' }}>
                <p>Out of bounds</p>
                <button onClick={onClose}>OK</button>
            </div>
        </div>
    );
};

export default Modal;
