import {React } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/Routes';


function App() {

  return (
    <> 
    <Router>
      <Navbar/>
      <AppRoutes/>
    </Router>
    </>
  )
}

export default App;
