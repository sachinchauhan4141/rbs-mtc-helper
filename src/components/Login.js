import React from "react";
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="container">
      <h1 className="my-5">Login To Continue</h1>
      <Link
        onClick={() => loginWithRedirect()}
        className="btn btn-primary mx-1"
        to="/login"
        type="submit"
      >
        Login
      </Link>
    </div>
  );
}

export default Login;
