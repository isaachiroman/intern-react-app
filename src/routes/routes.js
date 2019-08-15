import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Homepage from '../components/HomePage';
import Search from '../components/Search';
class routes extends Component {
    render() {
        return (
            
            <>
                <Route  exact path="/" component={Homepage} />
                <Route path="/search" component={Search} />
            </>
        );
    }
}

export default routes;