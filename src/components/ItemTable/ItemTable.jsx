import React, {useContext, useState} from 'react';
import './ItemTable.css';
import Modal from '../../Modal/Modal';
import axiosInstance from '../../Services/axiosConfig';
import { ItemsContext, UPLOAD_ITEMS } from '../../context/itemsContext';

const ItemTable = ({item}) => {
    const {id, name, price, stock,  talla} = item
    const [modalShow, setModalShow] = useState(false);

    const {items, dispatch} = useContext(ItemsContext);

    const handelDelete = (id) => {
      axiosInstance.delete(`/${id}`).then(r => {
        if (r.status === 200) {
          const itemsUpload = items.filter(item => item.id !== r.data.id);
          dispatch({type: UPLOAD_ITEMS, payload: itemsUpload})
        }
      })
    }

  return (
    <>
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price} €</td>
        <td>{stock}</td>
        <td>{talla}</td>
        <td style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <i className="bi bi-pencil-square " onClick={() => setModalShow(true)}></i>
          | 
          <i className="bi bi-trash" onClick={() => handelDelete(id)}></i>
        </td>
    </tr>
    <Modal  show={modalShow}
        onHide={() => setModalShow(false)} 
        item={item}
        />
    </>
  )
}

export default ItemTable;