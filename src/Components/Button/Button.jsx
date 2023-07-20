import React from "react";
import { Link } from 'react-router-dom';
import './Button.css';

export function Button() {
  return (
    <div className="button-container">
      <Link to="/announces" style={{ textDecoration: "none" }}>
        <button className="adv-button">
          Ir a los Anuncios
        </button>
      </Link>
    </div>
  );
};