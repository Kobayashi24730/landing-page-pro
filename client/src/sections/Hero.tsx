import { useEffect, useState } from "react";
import { Sparkles, Smartphone, Palette } from "lucide-react";
import Button from "../components/ui/Button";
import "../styles/Hero.css";

export default function Hero() {

  const images = [
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900",
    "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=900"
  ];

  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const toggle = setInterval(() => {
      setImgIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3500);

    return () => clearInterval(toggle);
  }, []);

  return (
    <section className="hero">

      <div className="hero-text">

        <h1>Landing Page Pro</h1>

        <p className="hero-sub">
          Crie landing pages modernas, rápidas e responsivas
          prontas para converter visitantes em clientes.
        </p>

        <div className="hero-features">
          <span><Palette size={18} /> Design moderno</span>
          <span><Smartphone size={18} /> 100% responsivo</span>
          <span><Sparkles size={18} /> Alta conversão</span>
        </div>

        <div className="hero-cta">
          <Button />
        </div>

      </div>

      <div className="hero-image">
        <img key={imgIndex} src={images[imgIndex]} alt="hero preview" />
      </div>

    </section>
  );
}
