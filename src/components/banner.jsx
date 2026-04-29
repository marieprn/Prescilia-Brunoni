import "../styles/banner.scss";

import BannerImg from "../assets/banner.jpg";

const Banner = () => (
  <div className="banner">
    <div className="bannerImg">
      <img src={BannerImg} alt="Image Bannière" />
    </div>
    <div className="bannerContent">
      <span>Vos travaux, sans stress !</span>
      <p>
        Je sélectionne les meilleurs artisans et coordonne votre projet de A à Z.
      </p>
    </div>
  </div>
);

export default Banner;