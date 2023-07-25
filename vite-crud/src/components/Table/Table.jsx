import React from 'react';
import TableBS from 'react-bootstrap/Table';
import ItemTable from '../ItemTable/ItemTable';

const Table = ({items, editItem}) => {
    console.log(items)
  return (
    <TableBS striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#ID</th>
        <th>Productos</th>
        <th>Precios</th>
        <th>Stocks</th>
        <th>Tallas</th>
        <th> Editar | Eliminar</th>
      </tr>
    </thead>
    <tbody>
        {
            items.map((item, i) => (
               <ItemTable item={item} key={i} editItem={editItem}/>
            ))
        }
    </tbody>
  </TableBS>

  )
}

export default Table;