import { useEffect, useState } from "react";
import { Sparkles, Smartphone, Palette, ArrowRight } from "lucide-react";
import {Button} from "@/components/ui/Button"; 

const images = [
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900",
  "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=900"
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
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">

        <div className="flex flex-col items-start text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">Landing Page <span className="text-primary"s>Pro</span></h1>

          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
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
            <Button size="lg" className="gap-2">
              Começe agora!
              <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline">
              Ver Modelos
            </Button>
          </div>

        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted shadow-2xl lg:aspect-square">
          {images.map((img, index) => (
          <img 
            key={index} 
            src={img}
            alt={`Demonstração da Landing Page ${index + 1}`}
            loading="eager"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === imgIndex ? "opacity-100" : "opacity-0"
            }`}
          />
          ))}
        </div>
      </div>
    </section>
  );
}
