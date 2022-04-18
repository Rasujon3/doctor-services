import React, { useEffect, useRef } from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      toast("Login Successfully");
      navigate(from, { replace: true });
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    errorElement = (
      <p className="text-danger text-center">Error: {error?.message}</p>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = () => {
    navigate("/register");
  };
  const navigateForgetPassword = () => {
    navigate("/forgetPassowrd");
  };

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="container mx-auto login-container-width"
    >
      <h2 className="text-primary text-center mt-2">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button
          variant="primary login-container-width mx-auto d-block mb-2 grow"
          type="submit"
        >
          Login
        </Button>
      </Form>
      {errorElement}
      <Link
        to="/register"
        className="text-primary pe-auto text-decoration-none"
        onClick={navigateRegister}
      >
        <p>Don't have an account?</p>
      </Link>
      <Link
        to="/forgetPassowrd"
        className="text-primary pe-auto text-decoration-none"
        onClick={navigateForgetPassword}
      >
        <p>Forget Password?</p>
      </Link>
      <SocialLogin />
      <ToastContainer />
    </div>
  );
};

export default Login;
