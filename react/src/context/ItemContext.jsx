// context/ItemContext.jsx
import React, { createContext, useState } from "react";

export const ItemContext = createContext();

export function ItemProvider({ children }) {
  const [items, setItems] = useState([]);

  function addNewItem(item) {
    setItems((prev) => [...prev, { ...item, id: Date.now() }]);
  }

  return (
    <ItemContext.Provider value={{ items, addNewItem }}>
      {children}
    </ItemContext.Provider>
  );
}
