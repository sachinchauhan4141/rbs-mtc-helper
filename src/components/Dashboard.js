import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { user} = useAuth0();
  return (
    <div className="container my-3">
      <h1 className="my-3">
        {user.name}'s DashBoard...
      </h1>
      <ul className="list-group">
        <li className="list-group-item">Your Courses...</li>
        <li className="list-group-item">Your Papers...</li>
        <li className="list-group-item">Account...</li>
      </ul>
      <div class="my-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          <h3>Feedback..</h3>
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default Dashboard;
