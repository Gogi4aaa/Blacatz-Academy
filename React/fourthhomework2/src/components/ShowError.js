import React from "react";

export default function ShowError(props){
    return(
        <div>
            <div style={{color: 'red'}}>
                {props.error}
            </div>
        </div>
    )
}