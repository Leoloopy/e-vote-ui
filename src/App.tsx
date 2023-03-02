import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/LandingPage/homepage.components';
import DashBoard from './components/pages/dashboard/UserDashBoard.component';
import Login from './components/pages/LogInPage/logIn.component';
import CreateAccount from './components/pages/Registration/createAccount.components';
import "./App.scss";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard-home' element={<DashBoard />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/createAccount'element={<CreateAccount/>}/>
        </Routes>
    </div>
  );
}

export default App;
