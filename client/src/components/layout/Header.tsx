import { useEffect, useState } from "react";
import "../../styles/Header.css";
type Opcoes = {
  id: number;
  nome: string;
};

export default function Header() {
  const [texto, setTexto] = useState("de alta convercao!");
  const opcoes: Opcoes[] = [
    { id: 1, nome: "Home" },
    { id: 2, nome: "infos" },
    { id: 3, nome: "textos" },
    { id: 4, nome: "descontos" }
  ];

  useEffect(() => {
    const toggleText = setInterval(() => {
      setTexto((prev) => {
        return prev === "de alta convercao!" ? "Moderna!" : "de alta convercao!";
      });
    }, 3000);

    return () => clearInterval(toggleText);
  }, []);

  return (
    <div className="div-header">
      <div className="div-titulo">
        <h1>Landing Page Pro</h1>
        <small key={texto}>{texto}</small>
      </div>
      <div className="div-opcoes">
        {opcoes.map((op: any) => (
          <p key={op.id}>{op.nome}</p>
        ))}
      </div>
    </div>
  );
}
