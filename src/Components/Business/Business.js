import React from "react";
import "./Business.css";
//Assets
import zero from "./assets/0.png";
import one from "./assets/1.png";
import oneAndHalf from "./assets/1_5.png";
import two from "./assets/2.png";
import twoAndHalf from "./assets/2_5.png";
import three from "./assets/3.png";
import threeAndHalf from "./assets/3_5.png";
import four from "./assets/4.png";
import fourAndHalf from "./assets/4_5.png";
import five from "./assets/5.png";
import yelp from "./assets/yelp.png";

export default class Business extends React.Component {
  starDisplay() {
    let stars = this.props.business.rating;
    if (stars === 0) {
      return <img src={zero} alt={stars}></img>;
    }
    if (stars === 1) {
      return <img src={one} alt={stars}></img>;
    }
    if (stars === 1.5) {
      return <img src={oneAndHalf} alt={stars}></img>;
    }
    if (stars === 2) {
      return <img src={two} alt={stars}></img>;
    }
    if (stars === 2.5) {
      return <img src={twoAndHalf} alt={stars}></img>;
    }
    if (stars === 3) {
      return <img src={three} alt={stars}></img>;
    }
    if (stars === 3.5) {
      return <img src={threeAndHalf} alt={stars}></img>;
    }
    if (stars === 4) {
      return <img src={four} alt={stars}></img>;
    }
    if (stars === 4.5) {
      return <img src={fourAndHalf} alt={stars}></img>;
    }
    if (stars === 5) {
      return <img src={five} alt={stars}></img>;
    }
  }

  render() {
    return (
      <a href={this.props.business.url}>
        <div className="Business">
          <div className="image-container">
            <img src={this.props.business.image_url} alt="" />
          </div>
          <div className="yelp-name">
            <h1>{this.props.business.name}</h1>
          </div>
          <div className="Business-information">
            <div className="business-address">
              <p>{this.props.business.location.address1}</p>
              <p>{this.props.business.location.city}</p>
              <p>
                {this.props.business.location.state},{" "}
                {this.props.business.location.zip_code}
              </p>
            </div>
            <div className="star-assets">
              <img className="yelp" src={yelp} alt="yelp"></img>
              {this.starDisplay()}
            </div>
          </div>
          <div className="Business-reviews">
            <h2>{this.props.business.categories.alias}</h2>
            <p>{this.props.business.review_count} reviews</p>
          </div>
        </div>
      </a>
    );
  }
}
