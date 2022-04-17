import React, { useEffect } from "react";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import twitter from "../../../images/social/twitter-logo.png";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithTwitter,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  const [signInWithTwitter, twitterUser, twitterLoading, twitterError] =
    useSignInWithTwitter(auth);
  const navigate = useNavigate();

  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  useEffect(() => {
    if (user || githubUser || facebookUser || twitterUser) {
      navigate(from, { replace: true });
    }
  }, [user, githubUser, facebookUser, twitterUser]);

  if (loading || githubLoading || facebookLoading || twitterLoading) {
    return <Loading />;
  }
  if (error || githubError || facebookError || twitterError) {
    errorElement = (
      <p className="text-danger text-center">
        Error: {error?.message} {githubError?.message}
      </p>
    );
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px" }}
          className="bg-primary login-container-width"
        ></div>
        <p className="mt-2 px-2">OR</p>
        <div
          style={{ height: "1px" }}
          className="bg-primary login-container-width"
        ></div>
      </div>
      <div>
        {errorElement}
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info d-block mx-auto my-2 login-container-width"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button
          onClick={() => signInWithFacebook()}
          className="btn btn-info login-container-width d-block mx-auto my-2"
        >
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span className="px-2">Facebok Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info login-container-width d-block mx-auto my-2"
        >
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
        <button
          onClick={() => signInWithTwitter()}
          className="btn btn-info login-container-width d-block mx-auto"
        >
          <img style={{ width: "30px" }} src={twitter} alt="" />
          <span className="px-2">Twitter Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
