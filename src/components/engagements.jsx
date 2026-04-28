import "../styles/engagements.scss";

const engagements = [
  "Des entreprises qualifiées et vérifiées",
  "Un budget toujours maîtrisé",
  "Les surprises écartées",
  "Des plannings respectés",
];

const Engagements = () => (
  <div className="engagements">
    <h2>Nos engagements</h2>
    <div className="engagementsContenu">
      <ul className="engagements__liste">
        {engagements.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p className="engagements__accroche">
        Ne laissez pas votre maison aux mains du hasard et optez pour le tiers
        de confiance qui s'occupe de tout pour vous : le courtier en travaux !
      </p>
    </div>
  </div>
);

export default Engagements;