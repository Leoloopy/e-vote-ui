import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/LandingPage/homepage.components';
import DashBoard from './components/pages/dashboard/UserDashBoard.component';
import Login from './components/pages/LogInPage/logIn.component';
import CreateAccount from './components/pages/Registration/createAccount.components';
import CreatePoll from './components/pages/dashboard/createPoll.component';
import "./App.scss";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard-home' element={<DashBoard />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/createAccount'element={<CreateAccount/>}/>
            <Route path='/create-poll'element={<CreatePoll/>}/>
        </Routes>
    </div>
  );
}

export default App;
