import React from "react";
import './SearchForm.css';
import { faSearch, faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchForm extends React.Component {
    render() {
        return (
            <div className="formWrapper">
                <FontAwesomeIcon className="faImage" icon={faImages} />
                <h1>Search the Unsplash API</h1>
                <p>Type something in the field below to search Unsplash for related images</p>
                <form action="#" onSubmit={this.props.performSearch}>
                    <input
                        className="searchbar"
                        type="text"
                        placeholder="Search Image Tags..."
                        value={this.props.searchTerms}
                        onChange={(event) => this.props.handleSearchTermChange(event)}
                        required
                    />
                    <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </div>
        )
    }
}

export default SearchForm;
