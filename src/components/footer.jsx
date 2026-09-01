import "../styles/footer.scss";
import { FiPhone, FiMail, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerContainer">
        <div className="footerGrid">

          {/* Colonne 1 — Identité */}
          <div className="footerCol">
            <h3 className="footerNom">Prescilia Brunoni</h3>
            <p className="footerDesc">
              Courtière en travaux depuis 2018
            </p>

            <div className="footerContacts">
              <a href="tel:+33663552936" className="footerContact">
                <FiPhone size={15} />
                06 63 55 29 36
              </a>

              <a
                href="mailto:presciliabrunoni@gmail.com"
                className="footerContact"
              >
                <FiMail size={15} />
                presciliabrunoni@gmail.com
              </a>
            </div>
          </div>

          {/* Colonne 2 — Navigation */}
          <div className="footerCol">
            <p className="footerColTitre">Navigation</p>

            <ul className="footerLinks">
              <li><a href="#engagement">Engagement</a></li>
              <li><a href="#presentation">Présentation</a></li>
              <li><a href="#fonctionnement">Fonctionnement</a></li>
              <li><a href="#realisation">Réalisations</a></li>
              <li><a href="#avis">Avis</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Colonne 3 — Légal + Social */}
          <div className="footerCol">
            <p className="footerColTitre">Légal</p>

            <ul className="footerLinks">
              <li>
                <a href="/cgu-mentions-legales">
                  CGU – Mentions légales
                </a>
              </li>
            </ul>

            <a
              href="https://www.instagram.com/splendidhouse?igsi=MWI4bHUzNWtoOXYzNQ=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="footerInstagram"
            >
              <FiInstagram size={18} />
              Instagram
            </a>
          </div>

        </div>

        <p className="footerLegal">
          © {new Date().getFullYear()} Prescilia Brunoni — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}