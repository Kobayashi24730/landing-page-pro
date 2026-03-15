import "../../styles/Footer.css";
import { FaBolt, FaMobileAlt, FaRocket } from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Landing Page Pro</h2>
          <small>
            Criamos landing pages modernas para apresentar seu projeto,
            atrair clientes e transformar ideias em resultados.
          </small>
        </div>

        <div className="footer-features">
          <p className="footer-desc">
            Desenvolvimento focado em performance, responsividade
            e experiência do usuário.
          </p>
          <div className="footer-icons">
            <FaBolt />
            <FaMobileAlt />
            <FaRocket />
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <p>© 2026 Landing Page Pro — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
