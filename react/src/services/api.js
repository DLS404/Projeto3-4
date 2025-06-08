let mockDB = [];

export const getItems = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve([...mockDB]), 500);
  });
};

export const addItem = (item) => {
  return new Promise(resolve => {
    const newItem = { id: Date.now(), ...item };
    mockDB.push(newItem);
    setTimeout(() => resolve(newItem), 500);
  });
};
