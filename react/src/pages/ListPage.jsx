import React, { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

export default function ListPage() {
  const { items } = useContext(ItemContext);

  return (
    <div className="container">
      <h2>Listagem de Itens</h2>
      <ul className="item-list">
        {items.length === 0 && <p>Nenhum item cadastrado.</p>}
        {items.map((item) => (
          <li key={item.id}>
  <strong>{item.name}</strong> - {item.email} - {item.phone}
</li>

        ))}
      </ul>
    </div>
  );
}
