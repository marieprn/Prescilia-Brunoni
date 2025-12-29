import Header from "./components/header";
import Menu from "./components/menu";
import Carousel from "./components/carousel";
import Presentation from "./components/presentation";
import Engagements from "./components/engagements";
import Realisations from "./components/realisation";
import Avis from "./components/Avis";
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
      <Carousel slides={slides} />
      <Presentation/>
      <Engagements/>
      <Realisations/>
      <Avis/>
    </>
  );
}

export default App;