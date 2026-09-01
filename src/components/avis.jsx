import "../styles/avis.scss";

import avis1 from "../assets/avis/avis1.jpg"
import avis2 from "../assets/avis/avis2.jpg"
import avis3 from "../assets/avis/avis3.jpg"
import avis4 from "../assets/avis/avis4.jpg"

const avisImages = [
  avis1, avis2, avis3, avis4
];

const Avis = () => {
  return (
    <div className="avis">
      <h2>Avis</h2>

      {avisImages.length > 0 ? (
        <div className="avis__carrousel">
          <div className="avis__piste">
            {[...avisImages, ...avisImages].map((img, i) => (
              <div className="avis__slide" key={i}>
                <img src={img} alt={`Avis client ${(i % avisImages.length) + 1}`} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="avis__vide">Les avis arrivent bientôt !</p>
      )}
    </div>
  );
};

export default Avis;