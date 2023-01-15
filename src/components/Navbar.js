import React from "react";
import {Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const handleDashboard = () => {
    navigate("/dashboard");
  };
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
          {!localStorage.getItem("token") ? (
            <form className="d-flex" role="button">
              <Link className="btn btn-primary mx-1" to="/login" type="submit">
                Login
              </Link>
              <Link className="btn btn-primary mx-1" to="/signup" type="submit">
                Sign-up
              </Link>
            </form>
          ) : (
            <form className="d-flex " role="button">
              <button onClick={handleDashboard}className="btn btn-primary mx-1"  data-bs-toggle="collapse">
                Dashboard
              </button>
              <button onClick={handleLogout} className="btn btn-primary mx-1">
                Logout
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
