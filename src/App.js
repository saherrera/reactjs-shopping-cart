import React from 'react';
// import Home from './components/Home'
// import Login from './components/Login/index'
import Home from './containers/Home';
import Login from './containers/Login';

import { Route } from 'react-router-dom';

const App = ( ) => {
    return (
        <div className="container">
            
            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/login" component={Login}/>
        </div>
    );
}

export default App;
