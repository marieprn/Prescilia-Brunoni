import { Routes, Route } from "react-router-dom";
import TopHeader from "./components/topHeader";
import Banner from "./components/banner";
import Presentation from "./components/presentation";
import Fonctionnement from "./components/fonctionnement";
import Engagements from "./components/engagements";
import Realisations from "./components/realisation";
import Avis from "./components/avis";
import Contact from "./components/contact";
import Footer from "./components/footer";
import CGU from "./components/CGU";
import "./styles/app.scss";

const HomePage = () => (
  <>
    <section id="accueil"><Banner /></section>
    <section id="engagement"><Engagements /></section>
    <section id="presentation"><Presentation /></section>
    <section id="fonctionnement"><Fonctionnement /></section>
    <section id="realisation"><Realisations /></section>
    <section id="avis"><Avis /></section>
    <section id="contact"><Contact /></section>
  </>
);

function App() {
  return (
    <>
      <TopHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cgu-mentions-legales" element={<CGU />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;