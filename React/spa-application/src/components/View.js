import axios from 'axios';
import React, { useEffect, useState } from 'react';
import withMainLayout from '../layout/withMainLayout';
import { useParams } from 'react-router-dom';
function View(){
    const [info,setInfo] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3000/events/${id}`)
        .then(response =>{
            setInfo(response.data)
        })
    }, [])
    const { id } = useParams();
    
    return(
        <div className='text-center fs-3'>
            <p>Това събитие ще се проведе в <span className='text-danger'>{info.time == "" ? "няма посочен час" : info.time}</span> на <span className='text-danger'>{info.date == "" ? "няма посочена дата" : info.date}</span> в <span className='text-danger'>{info.place == "" ? "няма посочено местоположение" : info.place}</span>.</p>
            <p>Събитието ще е с цел <span className='text-danger'>{info.description == "" ? "няма посочено описание" : info.description}</span>.</p>
            <p>Ще ви очакваме с нетърпение!</p>
        </div>
    )
}
export default withMainLayout(View);