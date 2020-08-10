import React from "react";
import logo from "../../logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
//Components
import SearchBar from '../SearchBar/SearchBar'
import BusinessList from '../BusinessList/BusinessList'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>starvin</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

