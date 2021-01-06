import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import Services from './Services';
import User from './User';
import Search from './Search';

const App=()=>{
    return (
        <React.Fragment>
        <Menu />
        <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/search' component={Search} />
        <Route path= '/contact' component={Contact} />
        <Route exact path='/services' component={Services} />
        <Route path='/user/:fname/' component={User}/>
        <Route component={Error} />
        </Switch>
        </React.Fragment>
    )
};

export default App;