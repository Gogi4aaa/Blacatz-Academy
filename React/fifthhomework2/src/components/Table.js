import React from 'react';

export default function Table({data, deleteItem, edit}){
    return(
        <>
            <table className='table table-bordered text-center'>
                <tr>
                    <th>Ид</th>
                    <th>Заглавие на статия</th>
                    <th>Съдържание</th>
                    <th>Автор</th>
                    <th>Действия</th>
                </tr>
                {data.map(x => (
                    <tr>
                        <td>{x.id}</td>
                        <td>{x.title}</td>
                        <td>{x.content}</td>
                        <td>{x.author}</td>
                        <td>
                            <div className='text-center'>
                                <button onClick={()=>edit(x)} className='btn btn-warning me-3'>
                                    <i className='fa fa-pencil'></i>
                                </button>
                                <button onClick={() =>deleteItem(x.id)} className='btn btn-danger'>
                                    <i className='fa fa-x'></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </table>
        </>
    )
}