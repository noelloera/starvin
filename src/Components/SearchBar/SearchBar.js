import React from 'react'
import "./SearchBar.css"

const searchAPI = "https://api.yelp.com/v3/businesses/search"

const options = {
    "Best Match": "best_match",
    "Highest Rating": "rating",
    "Most Reviews": "review_count"
}

export default class SearchBar extends React.Component {
    renderSortOptions() {
        return Object.keys(options).map((option) => {
            let sortOption = options[option]
            return <li key={sortOption}>{sortOption}</li>
        })
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="sort-options">
                    <ul>
                        {this.renderSortOptions()}
                    </ul>
                </div>
                <div className="fields">
                    <input placeholder="Search Businesses"></input>
                    <input placeholder="Where? (City, Address, Zip)"></input>
                </div>
                <div className="submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}