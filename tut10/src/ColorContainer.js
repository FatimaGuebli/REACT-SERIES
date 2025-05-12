import React, { useState } from "react";

const ColorContainer = ({ color }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "12px",
        height: "300px",
        width: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: `${color}`,
      }}
    >
      <p>{color}</p>
    </div>
  );
};

export default ColorContainer;
