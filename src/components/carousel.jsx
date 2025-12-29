import { useState } from "react";
import "../styles/carousel.scss";

export default function Carousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide.before} alt="avant" />
            <img src={slide.after} alt="après" />
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === activeIndex ? "dot active" : "dot"}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <div className="txtaccrocheur">
        <p>Transformez votre intérieur avec un courtier en travaux de confiance, qui sélectionne et coordonne les artisans adaptés à votre projet tout en respectant scrupuleusement votre budget</p>
      </div>
    </div>
  );
}