import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu bg-secondary">
      <ul className="nav justify-content-center p-2">
        <li className="nav-item"><Link to="/about" className="nav-link text-white">Про сайт</Link></li>
        <li className="nav-item"><Link to="/gallery" className="nav-link text-white">Галерея</Link></li>
        <li className="nav-item"><Link to="/news" className="nav-link text-white">Новини</Link></li>
        <li className="nav-item"><Link to="/contacts" className="nav-link text-white">Контакти</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;