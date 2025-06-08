import React, { useState, useContext } from "react";
import { ItemContext } from "../context/ItemContext";

export default function Form() {
  const { addNewItem } = useContext(ItemContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples de telefone (mínimo 8 dígitos numéricos)
    const phoneRegex = /^\d{8,}$/;
    if (!phoneRegex.test(form.phone)) {
      alert("Digite um telefone válido (somente números, mínimo 8 dígitos).");
      return;
    }

    addNewItem(form);
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Digite seu nome"
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Digite seu email"
          required
        />
      </label>

      <label>
        Telefone:
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Ex: 11999999999"
          required
        />
      </label>

      <button type="submit">Cadastrar</button>
    </form>
  );
}
