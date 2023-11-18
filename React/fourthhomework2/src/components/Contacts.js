import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Contacts(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://api.api-ninjas.com/v1/inflation?country=Canada', {
            headers: {
                'X-Api-Key': 'kLy+fa2xSaYTlw5fecef+A==caA0OVGnLOV0cT8r'
            }
            })
            .then(response =>{
                console.log(response.data);
                setData(response.data)
            })
    }, []);
    return(
        <div>
            <table style={{width: '100%',borderCollapse: 'collapse', textAlign: 'center'}}>
                <tr>
                    <th>Country</th>
                    <th>Type</th>
                    <th>Period</th>
                    <th>Monthly_rate_pct</th>
                    <th>yearly_rate_pct</th>
                </tr>
                {data.map(x => 
                    <tr>
                        <td>{x.country}</td>
                        <td>{x.type}</td>
                        <td>{x.period}</td>
                        <td>{x.monthly_rate_pct}</td>
                        <td>{x.yearly_rate_pct}</td>
                    </tr>)}
            </table>
        </div>
    )
}