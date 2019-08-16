import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/search';
import Autocomplete from '../Autocomplete/Autocomplete';
class HomeInput extends Component {

    _handleChange = e => {
        const target = e.target;
        const { name, value }  = target;
        this.setState({
            [name] : value,
            // activeSuggestion: 0,
            // filteredSuggestions: [],
            // showSuggestion: false,
            // searchInput: e.currentTarget.innerText
        });
        this.props.onSearch(e.target.value);
        
    }
    render() {
        return (
            <React.Fragment>
                <div className="center-content d-flex flex-column justify-content-center">
                    <div className="homepage--logo">
                        <div className="logo--container d-flex justify-content-center"><img src="../../assets/img/asset-logo.png" alt="" /></div>
                    </div>
                    <div className="homepage--description">
                        <div className="description--container d-flex flex-column align-items-center"><span className="description-line line-1">Thị trường bất động sản Việt Nam</span></div>
                    </div>
                    <div className="homepage--input-search">
                        <div className="input-search__container d-flex justify-content-center">
                            <div className="w-100 input-search__content collapsed" id="autoComplete__content">
                                <Autocomplete suggestions={ this.props.data } to={ '/search' } onSearch={ this.props.onSearch }/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        data: state.search.listSearch 
    }
}
const mapDispatchToProps = dispatch => {
    return {
      onSearch: keyword => {
          dispatch(search(keyword));
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeInput);