import "./JokeCard.css";

const JokeCard = ({ text }) => {
  return (
    <section className="joke-card flip-horizontal-top">
      <h2 className="slide-in-bck-center">{text.setup}</h2>
      <h3 className="slide-in-bck-center">{text.punchline}</h3>
    </section>
  );
};

export default JokeCard;
