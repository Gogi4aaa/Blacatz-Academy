import React, { useState } from "react";
import axios from "axios";
import ShowResponse from "./ShowResponse";
import ShowError from "./ShowError";
export default function About(){
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    function check(e){
        
            axios.get(`https://api.api-ninjas.com/v1/${e}?limit=5`, {
                headers: {
                    'X-Api-Key': 'kLy+fa2xSaYTlw5fecef+A==caA0OVGnLOV0cT8r'
                }
            })
            .then(response =>{
                console.log(response);
                setData(response.data)
                setError('')
            })
            .catch(error => {
                if(e == ''){
                    setError('')
                }
                else{
                    setError(error.message)
                }
                
                setData([]);
            }) 
            
    }
    
    
    return(
        <div>
            <input type="text" onInput={(e)=>{ 
                check(e.target.value);
            }}/>
            {error == '' ? <ShowResponse data={data}/> : <ShowError error={error}/>}
        </div>
    )
}