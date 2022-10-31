import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faFacebook } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <div className="hero">
      <div className="grid grid-cols-2 gap-20 hero-content flex-col lg:flex-row my-20">
        <div className="text-center lg:text-left w-full">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 p-5 w-full shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login</h1>
          <form className="card-body">
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
          <p><FontAwesomeIcon icon={faCoffee}/></p>
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
        </div>
      </div>
    </div>
  );
};

export default Login;
