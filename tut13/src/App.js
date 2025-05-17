import { Header } from "./Header";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";

function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

  const [fetchError, setFetchError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw Error("did not recieve the expected data");
        }
        const listItems = await response.json();
        setFetchError(null);
        setItems(listItems);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
  }, []);

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
      <main>
        {isLoading && <p>lOADING iTEMS ..</p>}
        {fetchError && (
          <p style={{ color: "red" }}>{`Error : ${fetchError}`} </p>
        )}
        {!fetchError &&
          !isLoading(
            <Content
              items={items.filter((item) =>
                item.item.toLowerCase().includes(search.toLowerCase())
              )}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
