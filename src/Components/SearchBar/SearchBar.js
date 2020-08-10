import React from 'react'
import "./SearchBar.css"

const searchAPI = "https://api.yelp.com/v3/businesses/search"


export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            term:"",
            location:"",
            sort_by:"best_match"
        }
        this.options = {
            "Best Match": "best_match",
            "Highest Rating": "rating",
            "Most Reviews": "review_count"
        }

    }

    handleSortChange(value){
        this.setState = {sort_by: value}
    }

    getSortByClass(sortOption){
        if(this.state.sort_by===sortOption){
            return "active"
        }else{
            return ""
        }
    }

    renderSortOptions() {
        return Object.keys(this.options).map((option) => {
            let sortOption = this.options[option]
            return <li 
            onClick={this.handleSortChange.bind(this, sortOption)}
            className={this.getSortByClass(sortOption)} 
            key={sortOption}>{sortOption}
            </li>
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