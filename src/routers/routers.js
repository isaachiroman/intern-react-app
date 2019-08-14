import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from '../routes/routes';
import HeaderHome from '../layout/headers/HeaderHome';

class routers extends Component {
    render() {
        return (
            <>
               <Router>
                    <HeaderHome/>
                    <Switch>
                        <Routes />
                    </Switch>
               </Router>
            </>
        );
    }
}

export default routers;