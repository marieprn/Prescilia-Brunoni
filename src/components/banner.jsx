import "../styles/banner.scss";

import BannerImg from "../assets/banner.jpg";

const Banner = () => (
  <section className="banner">
    <div className="bannerImg">
        <img src={BannerImg} alt="Image Bannière" />
    </div>

    <div className="bannerContent">
      <h2>Vos travaux, sans stress</h2>

      <p>
        Je sélectionne les meilleurs artisans et coordonne votre projet de A à Z.
      </p>
    </div>
  </section>
);

export default Banner;