import { useEffect, useState } from "react";

const opcoes = [
  { id: 1, nome: "Home", link: "#" },
  { id: 2, nome: "Benefícios", link: "#benefits" },
  { id: 3, nome: "Depoimentos", link: "#social" },
  { id: 4, nome: "Modelos", link: "#sales" },
  { id: 5, nome: "Contato", link: "#contact" }
];

export default function Header() {
  const [texto, setTexto] = useState("de alta conversão!");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTexto((prev) =>
        prev === "de alta conversão!" ? "Moderna!" : "de alta conversão!"
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-tight">Landing Page Pro</h1>
          <small key={texto} className="animate-fade-in text-xs text-muted-foreground">{texto}</small>
        </div>
        <nav 
          className={`fixed inset-x-0 top-16 border-b bg-background p-6 transition-all md:static md:border-0 md:bg-transparent md:p-0 ${
            menuOpen ? "flex flex-col gap-4" : "hidden md:flex md:items-center md:gap-6"
          }`}
        >
          {opcoes.map((op) => (
            <a
              key={op.id}
              href={op.link}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {op.nome}
            </a>
          ))}
          <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Começar projeto
          </button>
        </nav>
        <div
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
          className="flex flex-col gap-1 md:hidden p-2"
        >
          <span className={`h-0.5 w-6 bg-foreground transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`h-0.5 w-6 bg-foreground transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-0.5 w-6 bg-foreground transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </div>
      </div>
    </header>
  );
}
