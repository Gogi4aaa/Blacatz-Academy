import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import withMainLayout from "../layout/withMainLayout";
function Details(){
    useEffect(()=>{
        alert("In Update! Visit other pages! :)");
        
    }, [])
    return(
        <div>
            <Link to={"/"}><button className=" mt-2 ms-2 btn btn-danger">Back to Home Page</button></Link>
            
        </div>
    )
}
export default withMainLayout(Details);