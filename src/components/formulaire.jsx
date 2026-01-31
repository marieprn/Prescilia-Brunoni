import { useState } from "react";
import "../styles/formulaire.scss";

const Formulaire = () => {
  const [form, setForm] = useState({
    nom: "",
    ville: "",
    telephone: "",
    objet: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire (front only) :", form);
  };

  return (
    <div className="formulaire">
      <h2>Contactez-nous</h2>

      <form className="formulaireContenu" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom</label>
          <input
            id="nom"
            name="nom"
            type="text"
            value={form.nom}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="ville">Ville</label>
          <input
            id="ville"
            name="ville"
            type="text"
            value={form.ville}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="telephone">Numéro de téléphone</label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            value={form.telephone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="objet">Objet</label>
          <input
            id="objet"
            name="objet"
            type="text"
            value={form.objet}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Formulaire;