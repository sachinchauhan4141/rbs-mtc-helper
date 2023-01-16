import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Updates from "./components/Updates";
import Dashboard from "./components/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Updates" element={<Updates />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <div className="container">
        <form className="d-flex" role="button">
          <Link
            onClick={() => loginWithRedirect()}
            className="btn btn-primary mx-1"
            to="/login"
            type="submit"
          >
            Login
          </Link>
        </form>
      </div>
    </BrowserRouter>
  );
}

export default App;
