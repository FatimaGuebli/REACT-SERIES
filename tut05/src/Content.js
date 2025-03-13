import React from "react";

const Content = () => {
  const name = "biti";

  const handleNameChange = () => {
    const names = ["microsoft", "facebook", "apple"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log("You clicked it");
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
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
      <p onDoubleClick={handleClick}>Hello {handleNameChange()} !</p>
      <button onClick={handleClick}>Click it !!!</button>
      <button onClick={() => handleClick2("Biti")}>Click it !!!</button>
      <button onClick={(e) => handleClick3(e)}>Click the event !!!</button>
      <button onClick={(e) => handleClick4(e)}>see the target !!!</button>
      <button onClick={(e) => handleClick5(e)}>see the innerText !!!</button>
    </main>
  );
};

export default Content;
