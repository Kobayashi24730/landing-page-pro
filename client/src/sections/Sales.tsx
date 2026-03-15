import FotoOne from "../assets/profile-1.jpg";
import FotoTwo from "../assets/profile-2.jpg";
import FotoThree from "../assets/profile-3.jpeg";
import { Sparkles, Smartphone, Palette } from "lucide-react";
import "../styles/SalesCards.css";

export default function CardsSales() {

  const opcoes = [
    {
      id: 1,
      foto: FotoOne,
      icon: <Sparkles size={20} />,
      titulo: "Criação de Landing Page",
      descricao: "Landing pages modernas e focadas em conversão."
    },
    {
      id: 2,
      foto: FotoTwo,
      icon: <Smartphone size={20} />,
      titulo: "Design Responsivo",
      descricao: "Sites que funcionam perfeitamente em qualquer dispositivo."
    },
    {
      id: 3,
      foto: FotoThree,
      icon: <Palette size={20} />,
      titulo: "Design Personalizado",
      descricao: "Layouts exclusivos para destacar sua marca."
    }
  ];

  function handleSubmit(id: number, titulo: string) {
    console.log("Card selecionado:", id, titulo);
  }

  return (
    <section className="sales">
      <div className="sales-header">
        <h2>Escolha o modelo ideal para seu projeto</h2>
        <p>
          Entre em contato para conhecer nossos modelos
          de landing pages profissionais.
        </p>
      </div>

      <div className="sales-cards">
        {opcoes.map((op: any) => (
          <div className="sales-card" key={op.id}>
            <img src={op.foto} alt={op.titulo} />
            <div className="sales-icon">{op.icon}</div>
            <h3>{op.titulo}</h3>
            <p>{op.descricao}</p>
            <button onClick={() => handleSubmit(op.id, op.titulo)} >
              Tenho interesse
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
