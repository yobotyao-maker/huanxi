"use client";

import { useEffect, useState } from "react";
import { CloudScreen } from "@/components/CloudScreen";

type HomeCarouselProps = {
  slides: Array<{ title: string; description: string }>;
};

export function HomeCarousel({ slides }: HomeCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="carousel-shell">
      <div className="carousel-stage">
        {slides.map((slide, index) => (
          <article className={`theme-slide ${active === index ? "active" : ""}`} key={slide.title}>
            <CloudScreen />
            <div>
              <strong>{`0${index + 1}`}</strong>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="carousel-dots" aria-label="Carousel controls">
        {slides.map((slide, index) => (
          <button
            aria-label={slide.title}
            aria-pressed={active === index}
            key={slide.title}
            onClick={() => setActive(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
