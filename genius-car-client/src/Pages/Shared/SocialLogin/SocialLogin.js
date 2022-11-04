import React, { useContext } from "react";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { setJWTAuthToken } from "../../../utilities/setJWTAuthToken";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const GoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setJWTAuthToken(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const GithubLogin = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <p className="flex justify-center text-3xl">
        <span className="border border-orange-300 rounded-full p-3">
          <FaFacebook />
        </span>
        <button
          onClick={GoogleLogin}
          className="border border-orange-300 rounded-full p-3 mx-3"
        >
          <FaGoogle />
        </button>
        <span
          onClick={GithubLogin}
          className="border border-orange-300 rounded-full p-3 "
        >
          <FaLinkedin />
        </span>
      </p>
    </div>
  );
};

export default SocialLogin;
