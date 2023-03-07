import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/LandingPage/homepage.components';
import DashBoard from './components/pages/dashboard/UserDashBoard.component';
import Login from './components/pages/LogInPage/logIn.component';
import CreateAccount from './components/pages/Registration/createAccount.components';
import VerifyToken from './components/pages/Verify/VerifyToken';
import CreatePoll from './components/pages/dashboard/createPoll.component';
import "./App.scss";
import ResendToken from './components/pages/Verify/ResendToken';
import ForgotPassword from './components/pages/ForgotPassword/ForgotPassword';
import {useState, createContext} from "react";
import { HeaderInfo } from './components/reusables/dashboard-header/dashboard-header';


export const HeaderContext = createContext<any>({});


function App() {
  const [headerInfo, setHeaderInfo] = useState({
    token:"",
    username: "",
    cohortName: "",
    image: "",    
  });
  return (
    <HeaderContext.Provider value={{headerInfo, setHeaderInfo}}>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/dashboard-home" element={<DashBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/verify" element={<VerifyToken />} />
          <Route path="/resendToken" element={<ResendToken />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/create-poll" element={<CreatePoll />} />
      </Routes>
    </div>
        </HeaderContext.Provider>
  );
}

export default App;
