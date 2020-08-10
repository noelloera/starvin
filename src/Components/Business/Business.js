import React from 'react';
import "./Business.css"



export default class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.business.imageSrc} alt="" />
                </div>
                <h1>{this.props.business.name}</h1>
                <div className="business-information">
                    <div className="Business-address">
                        <p>{this.props.business.address}</p>
                        <p>{this.props.business.city}</p>
                        <p>{this.props.business.state}, {this.props.business.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h2>{this.props.business.category}</h2>
                        <h2 className="rating">{this.props.business.rating}</h2>
                        <p>{this.props.business.reviewCount} reviews</p>
                    </div>

                </div>
            </div>
        )
    }
}