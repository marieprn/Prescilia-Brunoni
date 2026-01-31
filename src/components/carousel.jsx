import { useMemo, useState } from "react";
import "../styles/carousel.scss";

export default function Carousel({ slides = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sécurité si slides change (ex: fetch)
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);

  const goTo = (index) => {
    if (index < 0 || index >= safeSlides.length) return;
    setActiveIndex(index);
  };

  if (!safeSlides.length) return null;

  return (
    <section className="carousel" aria-label="Avant / Après">
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {safeSlides.map((slide, index) => (
            <div className="carousel-slide" key={index}>
              <figure className="shot">
                <span className="badge">Avant</span>
                <img
                  src={slide.before}
                  alt="Avant travaux"
                  loading="lazy"
                  draggable="false"
                />
              </figure>

              <figure className="shot">
                <span className="badge badge--after">Après</span>
                <img
                  src={slide.after}
                  alt="Après travaux"
                  loading="lazy"
                  draggable="false"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots" role="tablist" aria-label="Navigation">
        {safeSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Aller au projet ${index + 1}`}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>

      <div className="txtaccrocheur">
        <p>
          Transformez votre intérieur avec un courtier en travaux de confiance,
          qui sélectionne et coordonne les artisans adaptés à votre projet tout
          en respectant scrupuleusement votre budget.
        </p>
      </div>
    </section>
  );
}