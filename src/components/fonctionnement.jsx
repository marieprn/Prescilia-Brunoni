import "../styles/fonctionnement.scss";
import FonctionnementUn from "../assets/fonctionnement/1.jpg";
import FonctionnementDeux from "../assets/fonctionnement/2.jpg";
import FonctionnementTrois from "../assets/fonctionnement/3.jpg";
import FonctionnementQuatre from "../assets/fonctionnement/4.jpg";

const Fonctionnement = () => (
  <section className="fonctionnement">
    <h2>Fonctionnement</h2>

    <p className="intro">
      Je travaille pour vous et avance avec vous main dans la main en toute
      transparence et supervise votre projet de votre idée jusqu'à la
      réalisation de votre rêve pour un projet en sérénité et sans stress !
    </p>

    <div className="etapes">
      <div className="etape">
        <img src={FonctionnementUn} alt="" />
        <p>Définition de votre projet</p>
        <span>Cadrage des besoins et calcul des budgets</span>
      </div>

      <div className="etape">
        <img src={FonctionnementDeux} alt="" />
        <p>Élaboration des plans 3D</p>
        <span>Conçus selon votre enveloppe budgétaire</span>
      </div>

      <div className="etape">
        <img src={FonctionnementTrois} alt="" />
        <p>Rédaction du devis</p>
        <span>Choix de l'entreprise adaptée</span>
      </div>

      <div className="etape">
        <img src={FonctionnementQuatre} alt="" />
        <p>Réalisation des travaux</p>
        <span>Selon les dates établies</span>
      </div>
    </div>

    <p className="conclusion">
      Résultat : un projet maîtrisé réalisé en toute confiance !
    </p>
  </section>
);

export default Fonctionnement;