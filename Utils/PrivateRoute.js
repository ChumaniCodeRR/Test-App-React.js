import React from 'react';
import {Route, Redirect } from 'react-router-dom';
import {getToken} from './Common';

// handle private route class

function PrivateRoute({ compnent: Component, ...rest}){
    return (
        <Route
         {...rest}
         render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}

        />
    
    )
}

export default PrivateRoute;