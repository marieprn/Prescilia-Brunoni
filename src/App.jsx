import Header from "./components/header";
import Menu from "./components/menu";
import Banner from "./components/banner";
import Presentation from "./components/presentation";
import Fonctionnement from "./components/fonctionnement";
import Engagements from "./components/engagements";
import Realisations from "./components/realisation";
import Avis from "./components/Avis";
import Formulaire from "./components/formulaire";
import Footer from "./components/footer";
import "../src/styles/app.scss";


function App() {

  return (
    <>
      <Header />
      <Menu />

      <section id="accueil">
        <Banner/>
      </section>

       <section id="presentation">
        <Presentation />
      </section>

      <section id="presentation">
        <Fonctionnement />
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

      <section id="contact">
        <Formulaire />
      </section>
      <Footer/>
    </>
  );
}

export default App;