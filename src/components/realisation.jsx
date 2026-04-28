import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { realisationsData } from "../data/realisationData";
import "../styles/realisation.scss";

const categories = ["Tous", "Cuisine", "Salle de bain", "Extension", "Ouverture", "Chambre"];

const Realisations = () => {
  const [filter, setFilter] = useState("Tous");
  const navigate = useNavigate();

  const filtered = filter === "Tous"
    ? realisationsData
    : realisationsData.filter(r => r.category === filter);

  return (
    <div className="realisations">
      <h2>Nos réalisations</h2>

      <div className="filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="cards">
        {filtered.map(item => (
          <div
            className="card"
            key={item.id}
            onClick={() => navigate(`/realisations/${item.id}`)}
          >
            <img src={item.images[0]} alt={item.title} />
            <div className="card__info">
              <span className="card__category">{item.category}</span>
              <p className="card__title">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realisations;