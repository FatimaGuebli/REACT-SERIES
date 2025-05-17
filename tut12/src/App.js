import { Header } from "./Header";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList")) || []
  );

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(items));
  }, [items]);

  const [newItem, setNewItem] = useState("");

  const addItem = (item) => {
    const id = items.length ? items.length + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    //add item
    addItem(newItem);
    setNewItem(newItem);
  };

  return (
    <div className="App">
      <Header title="grocery" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
