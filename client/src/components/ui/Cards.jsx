import { FaBolt, FaMobileAlt, FaRocket } from "react-icons/fa";
import "../../styles/Cards.css";

export default function Cards() {

  const textos = [
    {
      icon: <FaRocket />,
      titulo: "Alta Performance",
      texto: "Landing pages rápidas e otimizadas."
    },
    {
      icon: <FaMobileAlt />,
      titulo: "Responsivo",
      texto: "Funciona perfeitamente em qualquer dispositivo."
    },
    {
      icon: <FaBolt />,
      titulo: "Conversão",
      texto: "Design focado em gerar mais vendas."
    }
  ];

  return (
    <div className="cards">
      {textos.map((tex, index) => (
        <div className="card" key={index}>
          <span className="card-icon">
            {tex.icon}
          </span>
          <h3>{tex.titulo}</h3>
          <p>{tex.texto}</p>
        </div>
      ))}
    </div>
  );
}
