import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import HomePage from "../Components/HomePage/HomePage";
import PunInput from "../Components/PunInput/punInput";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/input" render={() => <PunInput />} />
      </Switch>
    </div>
  );
}

export default App;
