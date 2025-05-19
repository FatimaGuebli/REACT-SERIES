function ButtonItem({ buttonList, buttons, setButtons }) {
  const buttonStyle = {
    height: "50px",
    backgroundColor: "grey",
    fontFamily: "sans-serif",
    fontSize: "20px",
    border: "none",
    borderLeft: "black solid 1px",
    flex: "1",
  };

  const handleClick = (id) => {
    const list = buttons.map((buttonItem) =>
      buttonItem.id === id
        ? { ...buttonItem, clicked: true }
        : { ...buttonItem, clicked: false }
    );
    setButtons(list);
    //console.log(list);
  };

  return (
    <>
      {buttons.map((buttonItem, id) => (
        <button
          key={id}
          style={{
            ...buttonStyle,
            borderLeft: buttonItem.id === 0 ? "none" : "1px solid black",
            color: buttonItem.clicked === true ? "white" : "black",
            backgroundColor: buttonItem.clicked === true ? "black" : "grey",
          }}
          onClick={() => {
            handleClick(buttonItem.id);
          }}
        >
          {buttonItem.name}
        </button>
      ))}
    </>
  );
}

export default ButtonItem;
