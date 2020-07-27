import React from "react";
import {fetchUnsplashAPIdata} from "./endpoints/unsplash";
import SearchForm from "./components/SearchForm/SearchForm";
import PhotoGrid from "./components/PhotoGrid/PhotoGrid";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.performSearch = this.performSearch.bind(this);
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
        this.state = {
            data: [],
            apiKey: process.env.REACT_APP_UNSPLASH_API_KEY,
            searchTerms: '',
        }
    }

    performSearch() {
        fetchUnsplashAPIdata(this.state.apiKey, this.state.searchTerms).then((e) => {
            console.log(JSON.parse(e.toString()));
            this.setState({data: JSON.parse(e.toString()).results})
        });
    }

    handleSearchTermChange(event) {
        this.setState({searchTerms: event.target.value});
    }

    componentDidMount() {
        fetchUnsplashAPIdata(this.state.apiKey).then((e) => {
            this.setState({data: JSON.parse(e.toString())})
        });
    }

    render() {
        return (
            <React.Fragment>
                <SearchForm performSearch={this.performSearch} searchTerms={this.state.searchTerms} handleSearchTermChange={this.handleSearchTermChange} />
                {typeof this.state.data === 'object' ? <PhotoGrid data={this.state.data}/> : <p>No Photos Found</p>}
            </React.Fragment>
        );
    }
}


export default App;