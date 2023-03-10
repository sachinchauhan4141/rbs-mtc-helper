import React from "react";
import {Link,useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated,logout } = useAuth0();
  const navigate = useNavigate()
  const handleDashboard = () =>{
    navigate('/Dashboard')
  }
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#ffffff"}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          RBS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Courses">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Updates">
                Updates
              </Link>
            </li>
          </ul>
          { isAuthenticated ? (
            <form className="d-flex " role="button">
              <button onClick={handleDashboard} className="btn btn-primary mx-1"  data-bs-toggle="collapse">
                Dashboard
              </button>
              <button onClick={() => logout({ returnTo: window.location.origin })} className="btn btn-primary mx-1">
                Logout
              </button>
            </form>
          ) :navigate('/Login')}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
