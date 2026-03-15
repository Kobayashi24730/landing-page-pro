import { useState } from "react";
import "../../styles/Form.css";

export default function Forms() {

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    motivo: ""
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function enviarInfos(e: React.FormEvent) {
    e.preventDefault();

    console.log("Dados enviados:", form);
  }

  return (
    <section className="form-section">
      <div className="form-container">
        <h2>Entre em contato</h2>
        <p>
          Tem interesse em uma landing page profissional?
          Envie sua mensagem e retornaremos o mais rápido possível.
        </p>

        <form onSubmit={enviarInfos}>
          <div className="form-grid">

            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="telefone"
              placeholder="Seu telefone"
              value={form.telefone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="motivo"
              placeholder="Motivo do contato"
              value={form.motivo}
              onChange={handleChange}
            />

          </div>

          <button type="submit">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
