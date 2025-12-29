import "../styles/presentation.scss";
import ProfilImg from "../assets/profil.jpg";

const Presentation = () => 
  <div className="presentation">
    <h2>Présentation</h2>
    <div className="presentationContenu">
        <p>
            Courtier en travaux depuis 2018. J’ai débuté ma carrière au sein d’une grande franchise nationale, où j’ai acquis une solide expérience pendant six ans. Par la suite, j’ai choisi de travailler de manière indépendante, déployant mon expertise sur les secteurs du 91 et du 77. En collaborant avec de nombreuses sociétés du bâtiment, j’ai pu enrichir mon savoir-faire et développer des méthodes de travail uniques, afin d’offrir à mes clients un accompagnement sur-mesure et professionnel. <br/> <br/>
            J’accompagne mes clients dans la définition de leur projet, en cernant leurs besoins, en établissant des priorités adaptées à leur budget, et en sélectionnant les entreprises les plus compétentes pour leur projet. Je les soutiens également dans la gestion du chantier et des artisans, en me positionnant comme un tiers de confiance, toujours presente, disponible et réactive.<br/> <br/>
            Que ce soit pour des centaines de particuliers, des professionnels comme le pôle médical de Carré Sénart, ou des collectivités comme la Mairie et l’école de Rubelles, je mets un point d’honneur à respecter les budgets, les plannings et à garantir la qualité des travaux réalisés.
        </p>
        <img src={ProfilImg} alt="Prescilia Brunoni" />
    </div>
  </div>;

export default Presentation;