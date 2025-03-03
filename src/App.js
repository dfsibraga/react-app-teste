import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("START");
    console.log("environment variables: ", process.env);
    console.log(process.env.REACT_APP_my_var);
    console.log("development variable: ", process.env.REACT_APP_my_second_var);
    console.log(
      "production variable: ",
      process.env.REACT_APP_my_production_var
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
}

export default App;
