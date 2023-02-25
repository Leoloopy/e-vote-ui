import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/LandingPage/homepage.components';


function App() {
  return (
    <Routes>
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
}

export default App;
