import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../page/Home';
import CreateProduct from '../page/CreateProduct';
import ShowProducts from '../page/ShowProducts';


function AppRoutes() {
  return (
    <>
    <Routes>
        <Route path= '/' element={<Home/>}/> 
        <Route path= '/CREATE' element={<CreateProduct/>}/>
        <Route path='/LIST-PRODUCTS' element={<ShowProducts/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes