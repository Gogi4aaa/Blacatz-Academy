import React, { useState } from "react";

export default function SearchBar(props){
    return(
        <div style={{marginBottom: '30px'}}>
            <input style={{width: '20%', padding: '10px 15px', outline: 'none'}}
             placeholder="please enter your product"
             type="text"
             onInput={(e)=>props.handleSearch(e)}
             />
             <input style={{padding: '10px 15px'}} type="checkbox" onChange={(check)=>{
                props.handleCheck(check)
                
            }}/>
        </div>
    )
}