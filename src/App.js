import React from "react";
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
  
     <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
      <Routes>
      
        <Route exact path="/" element={<Landing />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/dashboard" element={<Dashboard />}/>
        
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  
  );
}

export default App;
