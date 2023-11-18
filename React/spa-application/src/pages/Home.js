import React, { useEffect, useState } from "react";
import axios from "axios";
import withMainLayout from "../layout/withMainLayout";
import { Link } from "react-router-dom";
function Home(){
    const URL_BASE = "http://localhost:3000";
    const [data, setData] = useState([]);
    useEffect(()=>{
        loadData();
            var emptyItem = data.filter(x => (x.date == "" && x.time == "" && x.description == "" && x.place == ""));
            if(emptyItem.length != 0)
            {
                axios.delete(`${URL_BASE}/events/${emptyItem.map(x=> x.id)}`)
                .then(response =>{
                    loadData();
                })
            }
    }, [data.length]);

    function loadData()
    {
        axios.get(`${URL_BASE}/events`)
        .then(response => {
            response.data.sort((a,b) => a.id - b.id);
            setData(response.data);
            
        })
    }
    function handleDelete(id)
    {
        axios.delete(`${URL_BASE}/events/${id}`)
        .then(response =>{
            loadData();
        })
    }

    return(
        <div>
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>TIme</th>
                        <th>Place</th>
                        <th>Description</th>
                        <th>Info</th>
                        <th>Events</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((x, index) => (
                    <tr key={index}>
                        <td>{x.id}</td>
                        <td>{x.date}</td>
                        <td>{x.time}</td>
                        <td>{x.place}</td>
                        <td>{x.description}</td>
                        <td><Link to={`/view/${x.id}`}><button className="btn btn-success"><i className="fa fa-circle-info"></i></button></Link></td>
                        <td>
                            <Link to={`/edit/${x.id}`}><button className="btn btn-warning"><i className="fa fa-pencil"></i></button></Link>
                            <button onClick={()=>handleDelete(x.id)} className="btn btn-danger ms-3"><i className="fa fa-x"></i></button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default withMainLayout(Home);