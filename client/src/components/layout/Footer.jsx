import { Zap, Smartphone, Rocket, Heart } from "lucide-react";

const nav_itens = [
  { nome: "Home", link: "#" },
  { nome: "Benefícios", link: "#benefits" },
  { nome: "Modelos", link: "#social" },
  { nome: "Depoimentos", link: "#sales" },
  { nome: "Contato", link: "#contact" },

]

export default function Footer() {
  const currentVar = new Date().getFullYear();

  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold tracking-tight text-foreground">Landing Page <span className="text-primary">Pro</span></h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Criamos landing pages modernas para apresentar seu projeto,
              atrair clientes e transformar ideias em resultados.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Navegação</h3>
            <ul className="flex flex-col gap-2">
              {nav_itens.map((item) => (
                <li key={item.nome}>
                  <a href={item.link} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Diferenciais</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Desenvolvimento focado em performance, responsividade
              e experiência do usuário.
            </p>
            <div className="flex gap-3 pt-2">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary"
                title="Alta Velocidade"
              >
                <Zap className="h-4 w-4" />
              </div>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary"
                title="100% Responsivo"
              >
                <Smartphone className="h-4 w-4" />
              </div>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary"
                title="Pronto para Decolar"
              >
                <Rocket className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentVar} Landing Page Pro — Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido com <Heart className="h-3.5 w-3.5 text-destructive fill-destructive" /> em React + Tailwind 
          </p>
        </div>
      </div>
    </footer>
  );
}
