import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Updates from "./components/Updates";
import Dashboard from "./components/Dashboard";
import Alert from "./components/Alerts";
import { useState } from "react";

function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Login" element={<Login showAlert={showAlert}/>} />
          <Route path="/Signup" element={<Signup showAlert={showAlert}/>} />
          <Route path="/Updates" element={<Updates />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
