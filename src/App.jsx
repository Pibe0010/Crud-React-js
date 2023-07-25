import {React, useReducer } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/Routes';
import { ItemsContext, ItemsReducer } from './context/itemsContext';


function App() {

  const initialState = [];

  const [items, dispatch] = useReducer(ItemsReducer, initialState);

  return (
    <> 
    <Router>
      <ItemsContext.Provider value={{items, dispatch}}>
      <Navbar/>
      <AppRoutes/>
      </ItemsContext.Provider>
    </Router>
    </>
  )
}

export default App;
