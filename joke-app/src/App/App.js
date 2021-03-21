import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getJoke } from "../apiCalls";

function App() {
  const [randomJoke, setRandomJoke] = useState({});
  const loadNewJoke = () => {
    getJoke()
      .then((res) => setRandomJoke(res.data))
      .catch(console.log("something went wrong"));
  };
  useEffect(() => {
    loadNewJoke();
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      {randomJoke.punchline && <h2>{randomJoke.setup}</h2>}
      <br />
      {randomJoke.punchline && <h2>{randomJoke.punchline}</h2>}
    </div>
  );
}

export default App;
