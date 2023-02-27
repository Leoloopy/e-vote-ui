import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/LandingPage/homepage.components';
import DashBoard from './components/pages/dashboard/UserDashBoard.component';
import "./App.scss";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route path='/dashboard-home' element={<DashBoard />} />
    </Routes>
    </div>
  );
}

export default App;
