import FotoOne from "../assets/profile-1.jpg";
import FotoTwo from "../assets/profile-2.jpg";
import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/SocialProof.css";

type Depoimento = {
  id: number;
  foto: string;
  nome: string;
  cargo: string;
  texto: string;
};

export default function SocialProof() {

  const depoimentos: Depoimento[] = [
    {
      id: 1,
      foto: FotoOne,
      nome: "Carlos Silva",
      cargo: "Empreendedor",
      texto:
        "A landing page aumentou muito meus contatos de clientes. O design ficou profissional e rápido."
    },
    {
      id: 2,
      foto: FotoTwo,
      nome: "Ana Souza",
      cargo: "Marketing Digital",
      texto:
        "Depois da nova landing page nossa taxa de conversão aumentou bastante. Excelente trabalho!"
    }
  ];

  return (
    <section className="social-proof">
      <h2 className="social-title">
        <small>Depoimentos</small>
        Crie o caminho digital para seu sucesso!
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="social-swiper"
      >
        {depoimentos.map((dep) => (
          <SwiperSlide key={dep.id}>
            <div className="social-card">
              <img src={dep.foto} alt={dep.nome} />
              <h3>{dep.nome}</h3>
              <small>{dep.cargo}</small>
              <p>{dep.texto}</p>
              <div className="social-icons">
                <FaWhatsapp />
                <FaInstagram />
                <FaGithub />
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </section>
  );
}
