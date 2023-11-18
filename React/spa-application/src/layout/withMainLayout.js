import React from "react";
import Header from "../components/Header";
export default function withMainLayout(Component){
    
    function layout(props){
        return(
            <>
            <div className="mb-3">
                <Header />
            </div>
                <Component {...props}/>
            </>
        )
    }
    return layout;
}