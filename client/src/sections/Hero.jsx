import { useEffect, useState } from "react";
import { Sparkles, Smartphone, Palette, ArrowRight, Pause, Mic } from "lucide-react";
import { Button } from "@/components/ui/Button";
import HeroPreview1 from "@/assets/profile-1.jpg";
import HeroPreview2 from "@/assets/profile-2.jpg";


const images = [
  {
    src: HeroPreview1,
    position: "object-[center_25%]"
  },
  {
    src: HeroPreview2,
    position: "object-[center_25%]"
  },
];

export default function Hero() {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const toggle = setInterval(() => {
      setImgIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3500);
    return () => clearInterval(toggle);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 lg:gap-12 px-4 lg:grid-cols-2">

        {/* Lado Esquerdo: Conteúdo */}
        <div className="flex flex-col items-start text-left z-20 relative">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Landing Page <span className="text-primary">Pro</span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-lg">
            Crie landing pages modernas, rápidas e responsivas
            prontas para converter visitantes em clientes.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-foreground">
            <span className="flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1.5">
              <Palette size={18} className="text-primary" /> Design moderno
            </span>
            <span className="flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1.5">
              <Smartphone size={18} className="text-primary"/> 100% responsivo
            </span>
            <span className="flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1.5">
              <Sparkles size={18} className="text-primary" /> Alta conversão
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="gap-2">
              <a href="#contact">
                Começar agora!
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#sales">Ver Modelos</a>
            </Button>
          </div>
        </div>

        {/* Lado Direito: Layout Mais Espaçado / Espalhado */}
        <div className="relative flex items-center justify-center min-h-[460px] w-full max-w-[620px] mx-auto p-4">

          {/* FOTO 1 (Maior, Esquerda/Centro - levemente por trás do texto) */}
          <div className="absolute -left-10 lg:-left-16 top-2 w-56 sm:w-64 h-72 sm:h-80 rounded-3xl overflow-hidden border bg-card shadow-lg z-0 -rotate-3 opacity-95">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80" 
              alt="Foto Principal" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* FOTO 2 (Topo Direita - Jogada mais para longe na direita e para cima) */}
          <div className="absolute -right-2 -top-6 w-40 sm:w-48 h-44 rounded-2xl overflow-hidden border bg-card shadow-md z-0 rotate-6">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80" 
              alt="Foto Secundária" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* FOTO 3 (Baixo Esquerda/Centro - deslocada mais para baixo) */}
          <div className="absolute left-16 -bottom-6 w-48 sm:w-56 h-36 rounded-2xl overflow-hidden border bg-card shadow-md z-0 rotate-1">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80" 
              alt="Foto Terciária" 
              className="w-full h-full object-cover object-[center_20%]" 
            />
          </div>

          {/* FOTO 4 (Baixo Direita - bem mais para fora no canto inferior) */}
          <div className="absolute -right-6 -bottom-2 w-40 sm:w-48 h-48 rounded-2xl overflow-hidden border bg-card shadow-md z-0 -rotate-6">
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80" 
              alt="Foto Quarta" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* WIDGET FLUENT CLARO (Centralizado com destaque) */}
          <div className="relative z-30 w-[290px] sm:w-[330px] rounded-2xl bg-card/90 text-card-foreground p-5 shadow-2xl border border-border/80 backdrop-blur-xl">
            
            {/* Topo do Widget */}
            <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-foreground">
                  End-of-Sprint Meeting
                </span>
              </div>
              <span className="text-[10px] bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold px-2.5 py-0.5 rounded-full border border-amber-500/20">
                Analyzing...
              </span>
            </div>

            {/* Conteúdo em Carrossel com Ajuste de Foco de Rosto (object-top) */}
            <div className="relative h-32 w-full rounded-xl overflow-hidden bg-muted/50 mb-4 border border-border/50">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={`Preview ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${img.position} ${
                    index === imgIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Rodapé do Widget */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-2 font-mono font-medium">
                <Mic size={15} className="text-primary" />
                <span>00:05:39</span>
              </div>
              <button className="flex items-center gap-1.5 bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border/60 px-3 py-1.5 rounded-lg text-xs font-medium transition-all shadow-sm active:scale-95">
                <Pause size={12} /> Pause
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}