import { useState } from "react";
import "../styles/avis.scss";

// Importe tes captures ici
// import avis1 from "../assets/avis/avis1.png";
// import avis2 from "../assets/avis/avis2.png";
// ...

const avisImages = [
  // avis1, avis2, avis3, ...
];

const Avis = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i === 0 ? avisImages.length - 1 : i - 1));
  const next = () => setCurrent(i => (i === avisImages.length - 1 ? 0 : i + 1));

  return (
    <div className="avis">
      <h2>Avis</h2>

      {avisImages.length > 0 ? (
        <div className="avis__carrousel">
          <button className="avis__btn avis__btn--prev" onClick={prev} aria-label="Avis précédent">
            &#8592;
          </button>

          <div className="avis__slide">
            <img
              src={avisImages[current]}
              alt={`Avis client ${current + 1}`}
            />
          </div>

          <button className="avis__btn avis__btn--next" onClick={next} aria-label="Avis suivant">
            &#8594;
          </button>

          <div className="avis__dots">
            {avisImages.map((_, i) => (
              <button
                key={i}
                className={`avis__dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Aller à l'avis ${i + 1}`}
              />
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