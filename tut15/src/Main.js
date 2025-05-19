//import React, { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import DataDisplay from "./DataDisplay";

function Main({ buttons }) {
  const [data, setData] = useState([]);
  //define the URl of the clicked button
  const clickedButton = buttons.find((button) => button.clicked === true);
  const clicked_URL = clickedButton ? clickedButton.JSON_URL : null;

  console.log(clicked_URL);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(clicked_URL);
        if (!response.ok) {
          throw Error("data from clickedURL is not fetched properly");
        }
        const dataList = await response.json();
        setData(dataList);
      } catch (err) {
        console.log(err.message);
      }
    };

    setTimeout(() => {
      (async () => await fetchData())();
    }, 2000);
  });

  return (
    <main>
      <DataDisplay data={data} clickedButton={clickedButton} />
    </main>
  );
}

export default Main;
