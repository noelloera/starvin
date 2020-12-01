import React from 'react'
import "./SearchBar.css"



export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            location: "",
            sort_by: "best_match"
        }
        this.options = {
            "Best Match": "best_match",
            "Highest Rating": "rating",
            "Most Reviews": "review_count"
        }
        //Need to bind to current instance
        this.handleSortChange = this.handleSortChange.bind(this)
        this.handleTerm = this.handleTerm.bind(this)
        this.handleLocation = this.handleLocation.bind(this)
        this.handleSearch = this.handleSearch.bind(this)

    }
    //Sort By Change Logic
    handleSortChange(value) {
        //onClick changes state
        this.setState({ sort_by: value })
    }

    getSortByClass(sortOption) {
        //for each rendered option will check if equal to current state
        if (this.state.sort_by === sortOption) {
            return "active"
        } else {
            return ""
        }
    }
    //Input Change Handlers for the events
    handleTerm(e) {
        this.setState({ term: e.target.value })
    }
    handleLocation(e) {
        this.setState({ location: e.target.value })
    }

    renderSortOptions() {
        return Object.keys(this.options).map((option) => {
            let sortOption = this.options[option]
            return <li
                onClick={this.handleSortChange.bind(this, sortOption)}
                className={this.getSortByClass(sortOption)}
                key={sortOption}>{option}
            </li>
        })
    }
    //Submit handler for searching
    handleSearch(e) {
        if (this.state.term !== "" && this.state.location !== "") {
            this.props.search(
                this.state.term,
                this.state.location,
                this.state.sort_by)
            e.preventDefault();
        } else {
            alert("All Values Must Be Entered")
        }
    }

    render() {
        return (
            <form className="SearchBar">
                <div className="sort-options">
                    <ul>
                        {this.renderSortOptions()}
                    </ul>
                </div>
                <div className="fields">
                    <input
                        onChange={this.handleTerm}
                        placeholder="Search Businesses"></input>
                    <input
                        onChange={this.handleLocation}
                        placeholder="Where? (City, Address, Zip)"></input>
                </div>
                <div className="submit">
                    <button
                        onClick={this.handleSearch}>Let's Go</button>
                </div>
            </form>
        )
    }
}