import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu=()=>{
    return(
        <React.Fragment>
        <div className="menu_style">
            <NavLink exact activeClassName="active_class" to='/'> About us </NavLink>
            <NavLink exact activeClassName="active_class" to='/search'> Search </NavLink>
            <NavLink exact activeClassName="active_class" to='/contact'> Contact us </NavLink>
            <NavLink exact activeClassName="active_class" to='/user/aman/'> User </NavLink>
            </div>
        </React.Fragment>
    );
};

export default Menu;