import { Zap, ShieldCheck, TrendingUp, Cpu } from "lucide-react";

const BENEFICIOS = [
  {
    id: 1,
    icon: Zap,
    titulo: "Velocidade Extrema",
    descricao: "Páginas otimizadas que carregam em menos de 1 segundo para não perder vendas.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    titulo: "Código Seguro e Limpo",
    descricao: "Desenvolvimento baseado nas melhores práticas e padrões modernos da web.",
  },
  {
    id: 3,
    icon: TrendingUp,
    titulo: "Foco em Conversão",
    descricao: "Layouts estruturados estrategicamente para transformar visitantes em clientes.",
  },
  {
    id: 4,
    icon: Cpu,
    titulo: "Tecnologia de Ponta",
    descricao: "Construído com React e Tailwind CSS para máxima escalabilidade e performance.",
  },
];

export default function Cards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {BENEFICIOS.map((item) => {
        const IconComponent = item.icon;

        return (
          <div
            key={item.id}
            className="flex flex-col items-start rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <IconComponent className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{item.titulo}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {item.descricao}
            </p>
          </div>
        );
      })}
    </div>
  );
}