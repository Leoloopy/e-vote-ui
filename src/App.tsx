import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/LandingPage/homepage.components';
import "./App.scss";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/home' element={<HomePage />} />
    </Routes>
    </div>
  );
}

export default App;
