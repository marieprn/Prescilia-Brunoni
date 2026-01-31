import "../styles/footer.scss";

import { FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="siteFooter">
        <div className="footerContainer">
        <div className="footerGrid">
            <p className="footerDesc">
              Prescilia BRUNONI courtière en travaux depuis 8 ans
            </p>
            <div className="footerLien">
                <a className="footerLienTel" href="tel:+33663552936">
                    <FiPhone />
                    <span>06 63 55 29 36</span>
                </a>

                <a className="footerLienMail" href="mailto:presciliabrunoni@gmail.com">
                    <FiMail />
                    <span>presciliabrunoni@gmail.com</span>
                </a>
            </div>
          </div>
          <nav className="siteFooter__col" aria-label="Liens légaux">
            <h3 className="siteFooter__title"> </h3>
            <ul className="siteFooter__list">
              <li><a className="siteFooter__link" href="/cgu-mentions-legales">CGU – Mentions légales</a></li>
            </ul>
          </nav>

          <div className="footerSocial">
            <a
                className="footerSocialBtn"
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
            >
                <FaInstagram />
            </a>
          </div>
        </div>

        <p className="footerLegal">
          Prescilia Brunoni - 
        </p>
    </footer>
  );
}