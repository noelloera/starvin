import React from "react";
import "./App.css";
//Components
import SearchBar from "../SearchBar/SearchBar.js";
import BusinessList from "../BusinessList/BusinessList.js";
const key = process.env.REACT_APP_KEY;

const searchAPI = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { businesses: [], loading: false };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    if (term && location && sortBy) {
      this.setState({ loading: true, businesses: [] });
      fetch(`${searchAPI}term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: "Bearer " + key,
        },
      }).then(async (response) => {
        try {
          let allBusinesses = await (await response.json()).businesses;
          console.log(allBusinesses);
          this.setState({ businesses: allBusinesses, loading: false });
        } catch (error) {
          alert(error);
          window.location = "/";
        }
      });
    } else {
      alert("Cannot Load Empty Values");
      window.location = "/";
    }
  }

  render() {
    return (
      <div className="App">
        <h3>starvin'</h3>
        <SearchBar search={this.searchYelp} />
        <div className="spinnner">
          {this.state.loading ? <div className="loader"></div> : null}
        </div>
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}
