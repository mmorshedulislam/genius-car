import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { logInWithEmailPassword } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInWithEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero">
      <div className="grid grid-cols-2 gap-20 hero-content flex-col lg:flex-row my-20">
        <div className="text-center lg:text-left w-full">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 p-5 w-full shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
          </form>
          <p className="text-center my-5">
            New to Genius Car?{" "}
            <Link className="text-orange-600" to={"/signup"}>
              Sign Up
            </Link>
          </p>
          <p>
            <FontAwesomeIcon icon={faCoffee} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
