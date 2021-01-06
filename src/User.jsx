import React from 'react';
import {useHistory, useLocation, useParams} from 'react-router-dom';

const User=()=>{
    const {fname}=useParams();
    const location=useLocation();
    const history=useHistory();
    return(
        <React.Fragment>
         <h1>User {fname} Page</h1>
         <p>My current location is {location.pathname}</p>
         <button onClick={()=>{history.goBack()}}>Go Back</button>
         </React.Fragment>
    )
};

export default User;