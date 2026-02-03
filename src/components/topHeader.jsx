import React from "react";
import "../styles/topHeader.scss";

const menuItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Présentation", href: "#presentation" },
  { label: "Fonctionnement", href: "#fonctionnement" },
  { label: "Engagement", href: "#engagement" },
  { label: "Réalisation", href: "#realisation" },
  { label: "Avis", href: "#avis" },
  { label: "Contactez-nous", href: "#contact" },
];

const TopHeader = () => {
  return (
    <header className="topHeader">
      {/* MENU à gauche */}
      <nav className="menu-bar">
        <ul>
          {menuItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HEADER à droite */}
      <div className="headerText">
        <h1>PRESCILIA BRUNONI</h1>
        <p>Courtier en travaux depuis 2018</p>
      </div>
    </header>
  );
};

export default TopHeader;