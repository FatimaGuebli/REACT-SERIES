const ColorInput = ({ color, setColor }) => {
  const handleColor = (e) => {
    setColor(e.target.value);
  };
  return (
    <form>
      <input
        type="text"
        value={color}
        onChange={handleColor}
        placeholder="Enter your favourite colour"
        style={{
          fontSize: "1.2rem",
          padding: "10px 14px",
          borderRadius: "8px",
          border: "1px solid gray",
          width: "250px",
        }}
      />
    </form>
  );
};

export default ColorInput;
