import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Forms() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    motivo: "",
  });

  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  /**
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e
   */
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function enviarInfos(e) {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Dados enviados:", form);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setEnviado(true);
      setForm({ nome: "", email: "", telefone: "", motivo: "" });
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
            Contato
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Entre em contato
          </h2>
          <p className="mt-2 text-base text-muted-foreground sm:text-lg">
            Tem interesse em uma landing page profissional? Envie sua mensagem e retornaremos o mais rápido possível.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-xl border bg-card p-6 sm:p-8 shadow-sm text-card-foreground">
          {enviado ? (
            <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in">
              <CheckCircle2 className="h-12 w-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold text-foreground">Mensagem enviada com sucesso!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Obrigado pelo contato. Responderemos em breve.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => setEnviado(false)}
              >
                Enviar outra mensagem
              </Button>
            </div>
          ) : (
            <form onSubmit={enviarInfos} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="nome" className="text-sm font-medium text-foreground">
                    Nome completo <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="nome"
                    type="text"
                    name="nome"
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mail <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="telefone" className="text-sm font-medium text-foreground">
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="telefone"
                    type="tel"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                    value={form.telefone}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="motivo" className="text-sm font-medium text-foreground">
                    Motivo do contato
                  </label>
                  <input
                    id="motivo"
                    type="text"
                    name="motivo"
                    placeholder="Ex: Orçamento de Landing Page"
                    value={form.motivo}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensagem <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}