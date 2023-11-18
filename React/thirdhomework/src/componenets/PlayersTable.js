import React, { useState } from "react";

export default function PlayersTable(props){
    return(
        <>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Increase score</th>
                    <th>Decrease score</th>
                </tr>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.score}</td>
                    <td><button onClick={()=>props.handleIncrease()}>Increase Score</button></td>
                    <td><button onClick={()=>props.handleDecrease()}>Decrease Score</button></td>
                </tr>
            </table>
        </>
    );
}