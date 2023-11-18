import React, { useEffect, useState } from "react";
export default function Cart({name,category, price, stock}){
    return (
    <>
        
        <table>
            <tr>
                <th>name</th>
                <th>category</th>
                <th>price</th>
                <th>stock</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                
                <td>{stock}</td>
                <td>In Cart</td>
            </tr>
        </table>
        
    </>
    );
}