import React from 'react';
import './ItemTable.css';

const ItemTable = ({item, editItem}) => {
    const {id, name, price, stock,  talla} = item
  return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{stock}</td>
        <td>{talla}</td>
        <td style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <i className="bi bi-pencil-square " onClick={editItem}></i>
          | 
          <i className="bi bi-trash"></i>
        </td>
    </tr>
  )
}

export default ItemTable;