import Cards from "../components/ui/Cards";
import "../styles/Benefits.css";

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits-container">
        <h2 className="benefits-title">
          Por que escolher nossa landing page?
        </h2>
        <p className="benefits-subtitle">
          Criamos páginas modernas, rápidas e focadas em gerar
          resultados reais para seu negócio.
        </p>
        <Cards />
      </div>
    </section>
  );
}
