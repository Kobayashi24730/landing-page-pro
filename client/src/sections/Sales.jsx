import FotoOne from "@/assets/web-1.jpg";
import FotoTwo from "@/assets/web-2.jpg";
import FotoThree from "@/assets/web-3.jpg";
import { Sparkles, Smartphone, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const opcoes = [
  {
    id: 1,
    foto: FotoOne,
    icon: Sparkles,
    titulo: "Criação de Landing Page",
    descricao: "Landing pages modernas e focadas em conversão."
  },
  {
    id: 2,
    foto: FotoTwo,
    icon: Smartphone,
    titulo: "Design Responsivo",
    descricao: "Sites que funcionam perfeitamente em qualquer dispositivo."
  },
  {
    id: 3,
    foto: FotoThree,
    icon: Palette,
    titulo: "Design Personalizado",
    descricao: "Layouts exclusivos para destacar sua marca."
  }
];

export default function CardsSales() {
  function handleSubmit(id, titulo) {
    console.log("Card selecionado:", id, titulo);
  }

  return (
    <section id="sales" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Escolha o modelo ideal para seu projeto
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Entre em contato para conhecer nossos modelos de landing pages profissionais.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {opcoes.map((op) => {
            const IconComponent = op.icon;
            return (
              <div
                key={op.id}
                className="group relative flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <img
                    src={op.foto}
                    alt={op.titulo}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {op.titulo}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {op.descricao}
                    </p>
                  </div>

                  <div className="mt-6">
                    <a href="#contact">
                      <Button
                        onClick={() => handleSubmit(op.id, op.titulo)}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        Tenho interesse <ArrowRight className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}