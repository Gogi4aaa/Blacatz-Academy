import React from "react";

export default function ShowResponse(props){
    return(
        <div>
            {props.data.map(x => <div>{x.fact}</div>)}
        </div>
    )
}