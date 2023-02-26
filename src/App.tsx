import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/LandingPage/homepage.components';
import Login from './components/pages/LogInPage/logIn.component';
import "./App.scss";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route path='login' element={<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;
