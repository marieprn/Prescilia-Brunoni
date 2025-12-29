import React from "react";
import '../styles/menu.scss';

const menuItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Présentation", href: "#presentation" },
  { label: "Engagement", href: "#engagement" },
  { label: "Réalisation", href: "#realisation" },
  { label: "Avis", href: "#avis" },
  { label: "F.A.Q", href: "#faq" },
  { label: "Contactez-nous", href: "#contact" }
];

const Menu = () => {
  return (
    <nav className="menu-bar">
      <ul>
        {menuItems.map(item => (
          <li key={item.label}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;