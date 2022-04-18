import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  let errorElement;

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  if (loading || updating) {
    return <Loading />;
  }

  if (error || updateError) {
    errorElement = (
      <p className="text-danger text-center">
        Error: {error?.message} {updateError?.message}
      </p>
    );
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  const onHandleChecked = (e) => {
    if (e.target.checked) {
      setAgree(true);
    } else {
      setAgree(false);
    }
  };

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="container register-form"
    >
      <h2 style={{ textAlign: "center" }} className="text-primary">
        Register Now
      </h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Email Address" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          onChange={onHandleChecked}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">
          Accept All Terms & Condition
        </label>
        {errorElement}
        <button
          disabled={!agree}
          className="reg-btn d-block mx-auto btn btn-primary mt-2 grow"
          type="submit"
        >
          Register
        </button>
      </form>

      <Link
        to="/login"
        className="text-primary pe-auto text-decoration-none"
        onClick={navigateLogin}
      >
        Already have an account?
      </Link>

      <SocialLogin />
    </div>
  );
};

export default Register;
