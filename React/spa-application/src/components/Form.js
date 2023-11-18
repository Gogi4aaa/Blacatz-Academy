import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import withMainLayout from "../layout/withMainLayout";
function Form() {
    const { id } = useParams();
    const URLBASE = "http://localhost:3000";
    const URL = "http://localhost:3001";
    const DEFAULT_EVENT = { id: parseInt(id), date: "", time: "", place: "", description: "" }
    const [newEvent, setNewEvent] = useState(DEFAULT_EVENT);

    useEffect(() => {
        if (window.location.href == `${URL}/edit/${id}`) {
            axios.get(`http://localhost:3000/events/${id}`)
            .then(response =>{
               setNewEvent(response.data) 
            })
            
        }
    }, [])



    function handleInput(event) {
        const { name, value } = event.target;
        setNewEvent({ ...newEvent, [name]: value })
    }
    function submitForm(id) {

        const url = (window.location.href == `${URL}/add` ? `${URLBASE}/events` : `${URLBASE}/events/${id}`);
        if (newEvent !== DEFAULT_EVENT && window.location.href == `${URL}/add`) {
            axios.post(url, newEvent);
        }
        else if (newEvent !== DEFAULT_EVENT && window.location.href !== `${URL}/add`) {
           axios.put(url, newEvent);
        }
    }

    return (
        <div className="container">
            <h1 className="text-center mt-3">{window.location.href == `${URL}/add` ? "Add new event" : "Edit current event"}</h1>
            <form>
                <div className="mt-3">
                    <label class="form-label">Date:</label>
                    <input onInput={e => handleInput(e)} value={newEvent.date} placeholder="date" className="form-control" type="date" name="date" />
                </div>
                <div className="mt-3">
                    <label class="form-label">Time:</label>
                    <input onInput={e => handleInput(e)} value={newEvent.time} placeholder="time" className="form-control" type="time" name="time" />
                </div>
                <div className="mt-3">
                    <label class="form-label">Place:</label>
                    <input onInput={e => handleInput(e)} value={newEvent.place} placeholder="place" className="form-control" type="text" name="place" />
                </div>
                <div className="mt-3">
                    <label class="form-label">Description:</label>
                    <input onInput={e => handleInput(e)} value={newEvent.description} placeholder="description" className="form-control" type="text" name="description" />
                </div>
                <div className="mt-3">
                    <Link to={"/"}><button onClick={() => submitForm(id)} type="button" className="btn btn-primary">{window.location.href == `${URL}/add` ? "Add" : "Edit"}</button></Link>
                </div>
            </form>
        </div>
    )
}

export default withMainLayout(Form);