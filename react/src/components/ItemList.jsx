import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

export default function ItemList() {
  const { items } = useContext(ItemContext);

  return (
    <ul className="item-list">
  {items.map(item => (
    <li key={item.id}>
      <h4>{item.name}</h4>
      <p>{item.email}</p>
    </li>
  ))}
</ul>

  );
}
