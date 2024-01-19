import React,{useState} from "react";
import { Login } from "./Pages";
import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";



function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleSignIn (){
    console.log(isAuthenticated)
    setIsAuthenticated(!isAuthenticated);
  }

  
  return (
    <Router>
      <div className="overflow-x-hidden bg-[#F8FAFF]">
        <Routes>
          <Route path="/login" element={<Login handleClick = {handleSignIn} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
