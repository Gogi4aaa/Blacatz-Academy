import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import axios from 'axios';
import About from './About';
export default function FirstPage(){
    const[data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://api.api-ninjas.com/v1/facts?limit=10', {
            headers: {
                'X-Api-Key': 'kLy+fa2xSaYTlw5fecef+A==caA0OVGnLOV0cT8r'
            }
        })
            .then(response =>{
                setData(response.data)
            })
    },[])
    return(
        <>
            <Menu />
            {data.map(fact => <div>{fact.fact}</div>)} 
            
        </>
    )
}