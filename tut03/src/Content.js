import React from "react";

const Content = () => {
  const name = "biti";

  const handleNameChange = () => {
    const companies = ["microsoft", "facebook", "apple"];
    const int = Math.floor(Math.random() * 3);
    return companies[int];
  };

  return (
    <main>
      <p>the company selected today is {handleNameChange()}</p>
    </main>
  );
};

export default Content;
