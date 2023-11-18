import React, { useState } from "react";
export default function Counter()
{
    const[number,setNumber] = useState(0);
    return(
        <div>
            <p>{number}</p>
            <button onClick={()=>{
                setNumber(number + 1);
            }}>+</button>
            <button onClick={()=>{
                setNumber(number - 1);
            }}>-</button>
        </div>
    )
}