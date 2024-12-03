import React, { useState } from 'react';
import './Modal.css'; // Импортируем стили для модалки

function EditerModal({ title, isOpen, children }) {
  if(!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default EditerModal;
