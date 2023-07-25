import React, { useEffect, useState } from 'react'
import axiosInstance from '../Services/axiosConfig';
import Table from '../components/Table/Table';

const ShowProducts = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axiosInstance.get("/")
      .then(r => {
        if(r.status === 200) {
          setItems(r.data);
        } else {
          throw new Error(`[${r.status}]Error en la solicitud`)
        }
      } )
      .catch(err => console.log(err))
  }, []);

  const editItem = () => {
    console.log("editando pruducto")
    // Aqui va el put
    
  }
  

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>LISTAR PRODUCTOS</h1>
        <div className='container fluid' style={{textAlign: 'center'}}>
          {
            items.length > 0 ? 
            <Table items={items} editItem={editItem}/>
            :
            <h2>No hay productos en el systema...</h2>
          }
        </div>
    </div>
  )
}

export default ShowProducts;