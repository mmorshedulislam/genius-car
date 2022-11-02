import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // const confirm = form.confirm.value;
    // signUp(email, password);

    const user = {
      name, 
      photoURL, 
      email, 
      password, 
    }
  
    fetch(`http://localhost:5000/users`, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      }, 
      body: JSON.stringify(user)
    })
    .then(() => {
      alert('User data stored in DB')
    })
    .catch(err => console.log(err))

    
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        profileUpdate(name, photoURL);
        form.reset();
      })
      .catch((err) => console.log(err));
  };

  const profileUpdate = (name, photoURL) => {
    const profile = { displayName: name, photoURL: photoURL };
    updateUser(profile)
      .then(() => {
        alert("Profile updated");
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
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm"
                placeholder="Confirm Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center my-5">
            Already, Have an account?{" "}
            <Link className="text-orange-600" to={"/login"}>
              Login
            </Link>
          </p>
          <p className="flex justify-center text-3xl">
            <span className="border border-orange-300 rounded-full p-3">
              <FaFacebook />
            </span>
            <span className="border border-orange-300 rounded-full p-3 mx-3">
              <FaGoogle />
            </span>
            <span className="border border-orange-300 rounded-full p-3">
              <FaLinkedin />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
