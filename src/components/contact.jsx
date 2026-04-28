import "../styles/contact.scss";

const Contact = () => {
  const email = "presciliabrunoni@gmail.com";

  const body = encodeURIComponent(
    `Bonjour Prescilia,\n\nVoici mes informations :\n\n- Nom et prénom : \n- Ville : \n- Projet : \n- Numéro de téléphone : \n\nCordialement,`
  );

  const subject = encodeURIComponent(
    "Demande de contact – Courtière en travaux"
  );

  return (
    <div className="contact">
      <h2>Contactez-nous</h2>

      <p className="contact__instruction">
        Cliquez sur le bouton ci-dessous pour nous envoyer un email. <br />
        Pensez à renseigner les informations suivantes dans votre message :
      </p>

      <ul className="contact__liste">
        <li>Nom et prénom</li>
        <li>Ville d'habitation</li>
        <li>Description de votre projet</li>
        <li>Numéro de téléphone</li>
      </ul>

      <a
        href={`mailto:${email}?subject=${subject}&body=${body}`}
        className="contact__bouton"
      >
        Envoyer un email
      </a>
    </div>
  );
};

export default Contact;