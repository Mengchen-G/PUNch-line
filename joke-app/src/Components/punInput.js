import React from "react";
import axios from "axios";

export default class PunInput extends React.Component {
  state = {
    setup: "",
    pun: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const punchline = {
      setup: this.state.setup,
      punchline: this.state.pun,
    };

    console.log(punchline);
    axios.post("http://localhost:3000/postTest", punchline).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" name="setup" onChange={this.handleChange} />
        </label>
        <label>
          <input type="text" name="pun" onChange={this.handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}
