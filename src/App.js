import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>starving</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
