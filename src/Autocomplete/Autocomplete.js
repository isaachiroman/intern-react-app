import React, { Component } from 'react';
import { withRouter } from 'react-router'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { countSearchResult } from '../actions/search';


class Autocomplete extends Component {
    static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
    };
    static defaultProperty = {
        suggestions: [],
        searchInput: ''
    };
    constructor(props) {
        super(props);
        this.state = {
        activeSuggestion: 0,
        showSuggestions: false,
        filteredSuggestions: [],
        searchInput: '',
        suggestions: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            suggestions: nextProps.suggestions
        });
    }

    onChange = e => {
        // const filteredSuggestions = this.state.suggestions.filter(
        //     suggestion => suggestion.(this.state.searchInput.toLowerCase()) -1
        // );
        this.setState({
            activeSuggestion: 0,
            showSuggestions: true,
            searchInput: e.target.value,
        });
    }

    onClick = e => {
        this.setState({
            activeSuggestion: 0,
            showSuggestions: false,
            searchInput: e.target.innerText,
            filteredSuggestions: []
        })
    }

    onKeyDown = (e) => {
        const { filteredSuggestions, activeSuggestion } = this.state;
        if ( e.target.value.trim().toLowerCase().length ) {
            this.setState({
                showSuggestions: false,
                searchInput: filteredSuggestions[activeSuggestion]
            });
        }
        this.props.onSearch(e.target.value)
        if (e.keyCode === 13) {
            this.props.history.push(this.props.to);
            this.props.getTotalSearchResult(e.target.value);
        }

        return this.setState({
            showSuggestions: true
        });
    }

    sugesstion = (suggestions) => {
        if(this.state.filteredSuggestions && this.state.searchInput) {
            return this.props.suggestions.map((suggestion, index) => { 
                return  <li key={ index }>{ suggestion.name }</li> 
            }); 
        }
        return ;
    };
    render () {
       
        return (
                <React.Fragment>
                    <input className="form-control"  
                        onChange={ this.onChange } onKeyDown={ this.onKeyDown }
                        onClick={  this.onClick }
                     />
                    <ul>
                        { this.sugesstion(this.props.suggestions) }
                    </ul>
                </React.Fragment>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getTotalSearchResult: (keyword, type) => {
            dispatch(countSearchResult(keyword, type))
        }
    }
}
export default withRouter(connect(null, mapDispatchToProps)(Autocomplete));