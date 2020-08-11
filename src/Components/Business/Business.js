import React from 'react';
import "./Business.css"
//Assets
import zero from "./assets/0.png"
import one from "./assets/1.png"
import oneAndHalf from "./assets/1_5.png"
import two from "./assets/2.png"
import twoAndHalf from "./assets/2_5.png"
import three from "./assets/3.png"
import threeAndHalf from "./assets/3_5.png"
import four from "./assets/4.png"
import fourAndHalf from "./assets/4_5.png"
import five from "./assets/5.png"
import yelp from "./assets/yelp.png"



export default class Business extends React.Component {

    starDisplay() {
        let stars = this.props.business.rating;
        if (stars === 0) {
            return <img src={zero} alt={stars}></img>
        }
        if (stars === 1) {
            return <img src={one} alt={stars}></img>

        }
        if (stars === 1.5) {
            return <img src={oneAndHalf} alt={stars}></img>

        }
        if (stars === 2) {
            return <img src={two} alt={stars}></img>

        }
        if (stars === 2.5) {
            return <img src={twoAndHalf} alt={stars}></img>

        }
        if (stars === 3) {
            return <img src={three} alt={stars}></img>

        }
        if (stars === 3.5) {
            return <img src={threeAndHalf} alt={stars}></img>
        }
        if (stars === 4) {
            return <img src={four} alt={stars}></img>

        }
        if (stars === 4.5) {
            return <img src={fourAndHalf} alt={stars}></img>
        }
        if (stars === 5) {
            return <img src={five} alt={stars}></img>

        }
    }

    render() {
        return (
            <a href={this.props.business.siteUrl}>
                <div className="Business">
                    <div className="image-container">
                        <img src={this.props.business.imageSrc} alt="" />
                    </div>
                    <div className="yelp-name">
                        <h1>{this.props.business.name}</h1>
                        <img className="yelp" src={yelp} alt="yelp"></img>
                    </div>
                    <div className="business-information">
                        <div className="Business-address">
                            <p>{this.props.business.address}</p>
                            <p>{this.props.business.city}</p>
                            <p>{this.props.business.state}, {this.props.business.zipCode}</p>
                        </div>
                        <div className="Business-reviews">
                            <h2>{this.props.business.category}</h2>
                            {this.starDisplay()}
                            <p>{this.props.business.reviewCount} reviews</p>
                            <a href="yelp.com">...read reviews</a>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}