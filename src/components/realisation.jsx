import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { realisationsData } from "../data/realisationData";
import "../styles/realisation.scss";

const Realisations = () => {
  const [filter, setFilter] = useState("tous");
  const navigate = useNavigate();

  const filtered = filter === "Tous"
    ? realisationsData
    : realisationsData.filter(r => r.category === filter);

  return (
    <div className="realisations">
      <h2>Nos réalisations</h2>

      <div className="filters">
        {["Tous", "Cuisine", "Salle de bain", "Extension", "Ouverture", "Chambre"].map(cat => (
          <button key={cat} onClick={() => setFilter(cat)}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realisations;