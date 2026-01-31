import Header from "./components/header";
import Menu from "./components/menu";
import Carousel from "./components/carousel";
import Presentation from "./components/presentation";
import Engagements from "./components/engagements";
import Realisations from "./components/realisation";
import Avis from "./components/Avis";
import FAQ from "./components/faq";
import Formulaire from "./components/formulaire";
import Footer from "./components/footer";
import "../src/styles/app.scss";
import Avant1 from "./assets/Avant1.jpg";
import Apres1 from "./assets/Apres1.jpg";
import Avant2 from "./assets/Avant2.jpg";
import Apres2 from "./assets/Apres2.jpg";

function App() {
  const slides = [
    { before: Avant1, after: Apres1 },
    { before: Avant2, after: Apres2 },
  ];

  return (
    <>
      <Header />
      <Menu />

      <section id="accueil">
        <Carousel slides={slides} />
      </section>

       <section id="presentation">
        <Presentation />
      </section>

      <section id="engagement">
        <Engagements />
      </section>

      <section id="realisation">
        <Realisations />
      </section>

      <section id="avis">
        <Avis />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="contact">
        <Formulaire />
      </section>
      <Footer/>
    </>
  );
}

export default App;