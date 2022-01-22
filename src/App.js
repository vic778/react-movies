import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './pages/UserList';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/like" element={<UserList />} />
        <Route path="*" element={<Home />} />

     </Routes> 
    </>
  );
};

export default App;
