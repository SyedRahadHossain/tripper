import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

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
      <div>
        <img className="img-fluid mt-3" src="" alt="" />
      </div>
      <div className="row border shadow rounded my-4 mx-2">
        {/* social login */}
        <div className="col-md-12 border-end border-start border-2 border-success ">
          <h3 className="my-4 text-success">Login With Social Network</h3>
          <button onClick={handleGoogleLogin} className="btn btn-danger my-3">
            <i className="fab fa-google"></i> Login with Google
          </button>
          <br />
          <button className="btn btn-primary my-3">
            <i className="fab fa-facebook-f"></i> Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
