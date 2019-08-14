import { Route, Link, Router } from 'react-router-dom';
import React, { Component } from 'react';

export const Index = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            
            <Redirect to={{ pathname: '/' }}/>
        )}
    />
)