import React from "react";
import Header from "./Header";
import Main from "./Main";
import { useEffect, useState } from "react";

function App() {
  const [fetchError, setFetchError] = useState(null);
  useEffect(() => {
    const fetchButtons = async () => {
      try {
        const response = await fetch("http://localhost:3500/buttonList");
        if (!response.ok) {
          throw Error("buttons array link is not fetching properly");
        }
        const buttonList = await response.json();
        setFetchError(null);
        setButtons(buttonList);
      } catch (err) {
        console.log(err.message);
      }
    };

    setTimeout(() => {
      (async () => await fetchButtons())();
    }, 2000);
  }, []);

  const [buttons, setButtons] = useState([]);
  //const [data, setData] = useState("");

  return (
    <div>
      <Header buttons={buttons} setButtons={setButtons} />
      <Main buttons={buttons} />
    </div>
  );
}

export default App;
