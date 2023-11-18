import React from "react";
export default function Product({products,deleteProduct, editProduct}){

    return(
        <>
        <table className='table table-bordered mt-4 text-center'>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>quantity</th>
              <th>description</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) =>
            (
                
              <tr>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.quantity}</td>
                <td>{p.description}</td>
                <td style={{ textAlign: 'center', }}>
                  <button onClick={()=>editProduct(p)} className='btn btn-warning text-white me-3'><i className='fa fa-pencil'></i></button>
                  <button onClick={()=>deleteProduct(index)} className='btn btn-danger text-white'><i className='fa fa-x'></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
}