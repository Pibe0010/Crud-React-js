import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from '../Services/axiosConfig';
import Table from '../components/Table/Table';
import { ItemsContext, UPLOAD_ITEMS } from '../context/itemsContext';

const ShowProducts = () => {

  //const [items, setItems] = useState([]);
  const {items, dispatch} = useContext(ItemsContext);

  useEffect(() => {
    axiosInstance.get("/")
      .then(r => {
        if(r.status === 200) {
          //setItems(r.data);
          dispatch({type: UPLOAD_ITEMS, payload: r.data})
        } else {
          throw new Error(`[${r.status}]Error en la solicitud`)
        }
      } )
      .catch(err => console.log(err))
  }, []);

  //const editItem = (id, data) => {
    //console.log("editando pruducto");
    // Aqui va el put
    //axiosInstance.put(`/${id}`, data)
    //.then(r => {
      //if (r.status === 200) {
        //axiosInstance.get('/')
        //.then(r => {
        //  if (r.status === 200) {
        //    setItems(r.data);
        //  } else {
        //    throw new Error(`[error ${r.status}]Error en solicitud`)
        //  }
        //})
        //.catch(err => console.log(err))
      //} else {
        //throw new Error(`[error ${r.status}]Error en solicitud`)
      //}
   // })
   // .catch(err => console.log(err));
  //}
  

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>LISTAR PRODUCTOS</h1>
        <div className='container fluid' style={{textAlign: 'center'}}>
          {
            items.length > 0 ? 
            <Table items={items}/>
            :
            <h2>No hay productos en el systema...</h2>
          }
        </div>
    </div>
  )
}

export default ShowProducts;