import React from 'react';
import "./Business.css"

const business = {
    imageSrc: "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90
}

export default class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={business.imageSrc} alt="" />
                </div>
                <h1>{business.name}</h1>
                <div className="business-information">
                    <div className="Business-address">
                        <p>{business.address}</p>
                        <p>{business.city}</p>
                        <p>{business.state}, {business.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h1>{business.category}</h1>
                        <h1 className="rating">{business.rating}</h1>
                        <p>{business.reviewCount} reviews</p>
                    </div>

                </div>
            </div>
        )
    }
}