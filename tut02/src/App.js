import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "biti";

  const handleNameChange = () => {
    const companies = ["microsoft", "facebook", "apple"];
    const int = Math.floor(Math.random() * 3);
    return companies[int];
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>html</p>
        <p>{name} </p>
        <p> {[1, 2, 3]} </p>
        <p>[1,2,3] </p>
        {/*we cant render objects like arrays that will give us an error*/}
        {/*<p>{{ a: apple, b: banana }} </p>*/}
        <p> {true === false} </p>
        <p>hello {name} !</p>
        <p>the random company selected is {handleNameChange()}</p>
      </header>
    </div>
  );
}

export default App;
