import { useState } from "react";
import "../styles/topHeader.scss";

const menuItems = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Engagement", href: "/#engagement" },
  { label: "Présentation", href: "/#presentation" },
  { label: "Fonctionnement", href: "/#fonctionnement" },
  { label: "Réalisations", href: "/#realisation" },
  { label: "Avis", href: "/#avis" },
  { label: "Contactez-nous", href: "/#contact" },
];

const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="topHeader">
      <nav className="menu-bar">
        {/* Burger */}
        <button
          className={`burger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Menu */}
        <ul className={isOpen ? "open" : ""}>
          {menuItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="headerText">
        <h1>PRESCILIA BRUNONI</h1>
        <p>Courtier en travaux depuis 2018</p>
      </div>
    </header>
  );
};

export default TopHeader;