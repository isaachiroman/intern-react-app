import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/search';
import Autocomplete from '../Autocomplete/Autocomplete';
class HomeInput extends Component {

    _handleChange = e => {
        const target = e.target;
        const { name, value }  = target;
        this.setState({
            [name] : value
        })
        this.props.onSearch(e.target.value)
        console.log(this.state);
        
    }
    render() {
        const { keyword } = this.props;
        console.log(keyword + 'keyword---')
        return (
            <>
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
                                <input 
                                    className="form-control" id="autoComplete" 
                                    name={keyword}
                                    type="text" 
                                    placeholder="Search ..." tabIndex={1} 
                                    onChange={e => this._handleChange(e)}
                                    />
                                    <Autocomplete  DATA= { this.props.DATA }/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        DATA:state.search.listSearch 
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      onSearch: keyword => {
          dispatch(search(keyword));
      }
    }
  }
export default connect(null,mapDispatchToProps)(HomeInput);