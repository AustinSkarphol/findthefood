import React from 'react';

import './App.css';
//import '../src/styles/styles'

import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import TruckRegister from './pages/truckregistration';
import UserRegister from './pages/userregistration';
import Map from './pages/map';

function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Map/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/truckregister' element={<TruckRegister/>} />
          <Route path='/userregister' element={<UserRegister/>} />
        </Routes>
      </Router>
      
    );
  }

export default App;