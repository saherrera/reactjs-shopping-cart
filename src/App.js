import React from 'react';
import Home from './containers/Home';
import Login from './containers/Login';
import Resume from './containers/Resume';

import { Route } from 'react-router-dom';

const App = ( ) => {
    return (
        <div className="container">
            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/login" component={Login}/>
            <Route exact={true} path="/resume" component={Resume}/>
        </div>
    );
}

export default App;
