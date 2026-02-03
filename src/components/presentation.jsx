import "../styles/presentation.scss";
import ProfilImg from "../assets/profil.jpg";

const Presentation = () => (
  <section className="presentation">
    <div className="presentationInner">
      <div className="presentationHeader">
        <h2>Présentation</h2>
        <p className="subtitle">Courtier en travaux • Accompagnement sur-mesure • 91 & 77</p>
      </div>

      <div className="presentationContenu">
        <div className="texte">
          <p>
            Courtier en travaux depuis 2018. J’ai débuté ma carrière au sein d’une grande franchise nationale,
            où j’ai acquis une solide expérience pendant six ans. Par la suite, j’ai choisi de travailler de
            manière indépendante, déployant mon expertise sur les secteurs du 91 et du 77. En collaborant avec
            de nombreuses sociétés du bâtiment, j’ai pu enrichir mon savoir-faire et développer des méthodes de
            travail uniques, afin d’offrir à mes clients un accompagnement sur-mesure et professionnel.
          </p>

          <p>
            J’accompagne mes clients dans la définition de leur projet, en cernant leurs besoins, en établissant
            des priorités adaptées à leur budget, et en sélectionnant les entreprises les plus compétentes.
            Je les soutiens également dans la gestion du chantier et des artisans, en me positionnant comme un
            tiers de confiance, toujours présente, disponible et réactive.
          </p>

          <p>
            Que ce soit pour des particuliers, des professionnels comme le pôle médical de Carré Sénart, ou des
            collectivités comme la Mairie et l’école de Rubelles, je mets un point d’honneur à respecter les
            budgets, les plannings et à garantir la qualité des travaux réalisés.
          </p>
        </div>

        <div className="photo">
          <img src={ProfilImg} alt="Prescilia Brunoni" />
        </div>
      </div>
    </div>
  </section>
);

export default Presentation;