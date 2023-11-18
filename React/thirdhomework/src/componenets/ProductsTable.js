import React from "react";
import "./ProductsTable.css"
export default function ProductsTable({name, category, price, stock, addInCart}){
    return(
        <>
            <table>
                    <tr>
                        <th>name</th>
                        <th>category</th>
                        <th>price</th>
                        <th>stock</th>
                        <th>Add In Cart</th>
                    </tr>
                    <tr>
                        <td>{name}</td>
                        <td>{category}</td>
                        <td>{price}</td>
                        <td>{stock}</td>
                        <td><button onClick={()=>{addInCart(name)}} style={{background: 'black', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px'}}>Add</button></td>
                    </tr>
            </table>
        </>
    )
}