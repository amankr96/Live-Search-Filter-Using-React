import React, { useState } from 'react';
import Sresult from './Sresult';

const Search=()=>{
    const[img,setImg]=useState("");
    const inputEvent=(event)=>{
        const data=event.target.value;
        setImg(data);   //Whatever you are writing will be getting typed in the i/p feild bcoz of this. Bcoz 
                        //the {value} was set to img and img was not changing as it was initially defined as null.[setImg] changes the value of img with every type
    }

    return(
        <React.Fragment>
        <div className="searchbar">
            <input type="text" placeholder="Search Anything" value={img} onChange={inputEvent}/>
            {img==="" ? null: <Sresult name={img}/> }
            </div>
        </React.Fragment>
    )
};

export default Search;