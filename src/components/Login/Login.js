import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import login from '../../images/login.jpg'

const Login = () => {
  const {
    signInUsingGoogle,
    setIsLoading
  } = useAuth();

  // redirecting
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/'


  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri)
      })
      .finally(() => setIsLoading(false));
  }


  return (
    <div className="container">
      <div className="row border shadow rounded my-4 mx-2">
        {/* social login */}
        <div className="col-md-6 border-end border-end border-2 border-success d-flex flex-column justify-content-center align-items-center">
          <h3 className="my-4 text-success">Login With Social Network</h3>
          <button onClick={handleGoogleLogin} className="btn btn-danger my-3">
            <i className="fab fa-google"></i> Login with Google
          </button>
          <br />
          <button className="btn btn-primary my-3">
            <i className="fab fa-facebook-f"></i> Login with Facebook
          </button>
        </div>
        <div className="col-md-6 border-2 border-start border-success">
          <img className="img-fluid" src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
