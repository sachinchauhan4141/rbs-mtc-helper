import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated} = useAuth0();
  return (
    <>
      <div className="container my-4">
        <div className="card text-bg-dark mb-3">
          <img
            src="https://images.unsplash.com/photo-1673059291336-4ac9b958d898?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <h1 className="card-title">{isAuthenticated?`Welcome ${user.name}`:"Welcome..."}</h1>
            <p className="card-text">
              <h4>Your raja balwant singh management technical campus helper</h4>
            </p>
            <p className="card-text">
              <small>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="container text-center mt-3"><h1>Recommendations...</h1></div>
        <div className="container text-center my-3">
          <div className="row">
            <div className="col">
              <div className="card" style={{width: "18rem"}}>
                <img src="https://images.unsplash.com/photo-1673702540498-d655e4153cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&h=800&q=80" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{width: "18rem"}}>
                <img src="https://images.unsplash.com/photo-1673702540498-d655e4153cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&h=800&q=80" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{width: "18rem"}}>
                <img src="https://images.unsplash.com/photo-1673702540498-d655e4153cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&h=800&q=80" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
