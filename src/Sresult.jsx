import React from 'react';

const Sresult=(props)=>{
    const im=`https://source.unsplash.com/user/erondu/400x300/?${props.name}`;
    return(
        <React.Fragment>
            <div>
                <img src={im} alt='search'/>
            </div>
        </React.Fragment>
    )
}

export default Sresult;