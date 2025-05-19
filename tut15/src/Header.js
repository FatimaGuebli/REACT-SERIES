import ButtonItem from "./ButtonItem";

function Header({ buttons, setButtons }) {
  return (
    <div
      style={{
        backgroundColor: "grey",
        height: "50px",
        width: "100%",
        border: "black solid 1px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
      }}
    >
      <ButtonItem
        //buttonList={buttonList}
        buttons={buttons}
        setButtons={setButtons}
      />
    </div>
  );
}

export default Header;
