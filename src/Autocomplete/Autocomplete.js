import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSuggestion: 0,
            filterSuggestion: [],
            showSuggestion: false,
            searchInput: ''
        }
    }
    static propTypes = {};
   
    render() {
        let suggestionsListComponent;
            if (showSuggestion && searchInput) {
                if (filterSuggestion.length) {
                    suggestionsListComponent = {
                        <ul></ul>
                    }
                }
            }
                
        return (
            <React.Fragment>
                <li>helo</li>
                {/* {suggestionsListComponent} */}
            </React.Fragment>
        );
    }
}

export default Autocomplete;