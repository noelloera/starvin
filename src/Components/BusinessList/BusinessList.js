import React from 'react';
import Business from "../Business/Business.js";
import './BusinessList.css'

//The function within the div will iterate through each instance and return an element
export default class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses.map(business=>{
                    return <Business key={business.id} business={business}/>
                })}
            </div>
        );
    }
} 