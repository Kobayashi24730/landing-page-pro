import Cards from "@/components/ui/Cards";

export default function Benefits() {
  return (
    <section id="benefits" className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
            Diferenciais
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Por que escolher nossa landing page?
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Criamos páginas modernas, rápidas e focadas em gerar
            resultados reais para seu negócio.
          </p>
        </div>
        <div className="mt-12">
          <Cards />
        </div>
      </div>
    </section>  
  );
}
