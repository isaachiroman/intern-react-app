import React, { Component } from 'react';
import PropTypes from "prop-types";

class Autocomplete extends Component {
    static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
    };
    static defaultProperty = {
        suggestions: []
    };
    constructor(props) {
        super(props);
        this.state = {
        activeSuggestion: 0,
        filteredSuggestions: false,
        searchInput: ''
        }
    }

    componentWillReceiveProps(nextProps) {
      console.log(nextProps.suggestions)
    this.setState({
        suggestions: nextProps.suggestions
    })
    }
    callback = (listSearch) => {
        return this.props.callback(listSearch);
    }
    fillComplete = () => {
        if (this.props.searchInput.length > 0) {
            this.state.suggestions.map((suggestion, index) => {
                
                return <li key={index} onClick={ this.props.callback }></li>
            })
        }
    }
    render () {
        const { suggestions } = this.props;
        const { searchInput } = this.state;
        return (
            <React.Fragment>
                {  
                    searchInput.length > 0 ? (
                        suggestions.map((suggestion,index) => { return <li key={index}>{suggestion.name}</li> }) 
                    ) : ''
                    
                } 
            </React.Fragment>
        );
    }
}
export default Autocomplete;