import React, { useState } from "react";

export default function RenderNames()
{
    const[names, setNames]  = useState(["Georgi","Pesho", "Dido", "Nikola", "Asparuh"]);

    function handleDelete(id)
    {
        names.splice(id,1);
        setNames([...names]);
    }
    return(
        <>
            <table>
                <tr>
                    <th>Name</th>
                    
                </tr>
                    {names.map((name, i) =><tr><td onClick={() =>handleDelete(i)} key={i}>{name}</td></tr>)}
            </table>
        </>
    )
}