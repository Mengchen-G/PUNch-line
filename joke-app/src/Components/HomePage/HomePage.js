import "./HomePage.css";
import { useState, useEffect } from "react";
import { getJoke } from "../../apiCalls";
import JokeCard from "../JokeCard/JokeCard";
import Loader from "../Loader/Loader";

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
      {error && <p>Sorry, there was a problem loading the joke</p>}
      {!randomJoke.punchline && <Loader />}
      {randomJoke.punchline && <JokeCard text={randomJoke} />}
      <button className="home-button" onClick={() => loadNewJoke()}>
        New
      </button>
    </div>
  );
}

export default HomePage;
