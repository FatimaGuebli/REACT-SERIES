import ColorContainer from "./ColorContainer";
import ColorInput from "./ColorInput";
import React, { useState } from "react";

function App() {
  const [color, setColor] = useState();
  return (
    <div className="App">
      <ColorContainer color={color} />
      <ColorInput color={color} setColor={setColor} />
    </div>
  );
}

export default App;
