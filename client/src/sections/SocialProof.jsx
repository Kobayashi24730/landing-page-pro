import FotoOne from "@/assets/profile-1.jpg";
import FotoTwo from "@/assets/profile-2.jpg";
import FotoThree from "@/assets/profile-3.jpeg";
import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const depoimentos = [
  {
    id: 1,
    foto: FotoOne,
    nome: "Ana Silva",
    cargo: "Empreendedor",
    texto:
      "A landing page aumentou muito meus contatos de clientes. O design ficou profissional e rápido."
  },
  {
    id: 2,
    foto: FotoTwo,
    nome: "Carlos Souza",
    cargo: "Marketing Digital",
    texto:
      "Depois da nova landing page nossa taxa de conversão aumentou bastante. Excelente trabalho!"
  },
  {
    id: 3,
    foto: FotoThree,
    nome: "Alice Santos",
    cargo: "Desenvolvedor",
    texto:
      "A landing page ajudou a aumentar minha visibilidade online. Estou muito satisfeito com o resultado."
  }
];


export default function SocialProof() {
  return (
    <section id="social" className="bg-background py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Crie o caminho digital para seu sucesso!
          </h2>
          <p className="mt-2 text-muted-foreground">
            Veja o que nossos clientes dizem sobre os resultados obtidos.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-14 pt-2"
        >
          {depoimentos.map((dep) => (
            <SwiperSlide key={dep.id} className="h-auto">
              <div className="flex h-full flex-col justify-between rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md">
                <div>
                  <div className="flex gap-1 text-amber-500 mb-4">
                    {Array.from({ length: dep.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500"/>
                    ))}
                  </div>
                  <p className="text-sm italic text-foreground/90 leading-relaxed mb-6">"{dep.texto}"</p>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <img 
                      src={dep.foto} 
                      alt={dep.nome}
                      loading="lazy"
                      className="h-10 w-10 rounded-full object-cover border"
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-foreground leading-none">{dep.nome}</h3>
                      <span className="text-xs text-muted-foreground">{dep.cargo}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 text-muted-foreground">
                    <a
                      href="#"
                      aria-label="whatsapp"
                      className="hover:text-primary transition-colors p-1"
                    >
                      <FaWhatsapp />
                    </a>
                    <a
                    href="#"
                    aria-label="instagram"
                    className="hover:text-primary transition-colors p-1">
                      <FaInstagram />
                    </a>
                    <a
                      href="#"
                      aria-label="github" 
                      className="hover:text-primary transition-colors p-1">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>    
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
