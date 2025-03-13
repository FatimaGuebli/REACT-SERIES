import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Biti");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["microsoft", "facebook", "apple"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    console.log(count);
    setCount(count + 1);
  };

  const handleClick2 = (name) => {
    console.log(count);
  };

  const handleClick3 = (e) => {
    console.log(e);
  };

  const handleClick4 = (e) => {
    console.log(e.target);
    console.log("we can see now the button element");
  };

  const handleClick5 = (e) => {
    console.log(e.target.innerText);
    console.log("we can see now the text inside the button tag");
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name} !</p>
      <button onClick={handleNameChange}>Change name</button>
      <button onClick={() => handleClick()}>Click it !!!</button>
      <button onClick={(e) => handleClick3(e)}>Click the event !!!</button>
    </main>
  );
};

export default Content;
