

import React from 'react';
import '../src/App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Dashboard/Dashboard';
 import Products from './Components/Products';
import Sales from './Components/Sales';
import Chat from './Components/Chat';
import ContactUs from './Components/ContactUs';

const App = () => {
  return (
    <>
      <Sidebar>
         <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/chat" element={<Chat />} />
           <Route path="/products" element={<Products />} />
           <Route path="/contactus" element={<ContactUs/>} />
        </Routes>
      </Sidebar>
      </>
  );
};

export default App;








