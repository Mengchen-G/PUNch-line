import "./HomePage.css";
import { useState, useEffect } from "react";
import { getJoke } from "../../apiCalls";

function HomePage() {
  const [randomJoke, setRandomJoke] = useState({});
  const [error, setError] = useState("");
  const loadNewJoke = () => {
    getJoke()
      .then((res) => setRandomJoke(res.data))
      .catch((err) => setError(err));
  };
  useEffect(() => {
    loadNewJoke();
  }, []);

  return (
    <div className="HomePage">
      <h1>Hello World</h1>
      {error && <p>Sorry, there was a problem loading the joke</p>}
      {!randomJoke.punchline && <p>The joke is loading...</p>}
      {randomJoke.punchline && <h2>{randomJoke.setup}</h2>}
      <br />
      {randomJoke.punchline && <h2>{randomJoke.punchline}</h2>}
    </div>
  );
}

export default HomePage;
