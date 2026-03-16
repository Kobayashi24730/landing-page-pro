import { useEffect, useState } from "react";
import "../../styles/Header.css";

type MenuItem = {
  id: number;
  nome: string;
  link: string;
};

export default function Header() {

  const [texto, setTexto] = useState("de alta conversão!");
  const [menuOpen, setMenuOpen] = useState(false);

  const opcoes: MenuItem[] = [
    { id: 1, nome: "Home", link: "#" },
    { id: 2, nome: "Benefícios", link: "#benefits" },
    { id: 3, nome: "Modelos", link: "#sales" },
    { id: 4, nome: "Depoimentos", link: "#social" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTexto((prev) =>
        prev === "de alta conversão!" ? "Moderna!" : "de alta conversão!"
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <h1>Landing Page Pro</h1>
          <small key={texto}>{texto}</small>
        </div>
        <nav className={`header-menu ${menuOpen ? "open" : ""}`}>
          {opcoes.map((op) => (
            <a
              key={op.id}
              href={op.link}
              onClick={() => setMenuOpen(false)}
            >
              {op.nome}
            </a>
          ))}
          <button className="header-cta">
            Começar projeto
          </button>
        </nav>
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
