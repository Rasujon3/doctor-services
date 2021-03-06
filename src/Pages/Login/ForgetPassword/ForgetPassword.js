import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const ForgetPassword = () => {
  const emailRef = useRef("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  let errorElement;

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      await toast("Sent email, Please check your inbox");
    } else {
      toast("Please enter your email address");
    }
  };

  if (sending) {
    return <Loading />;
  }

  if (error) {
    errorElement = (
      <p className="text-danger text-center">Error: {error?.message}</p>
    );
  }
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="container mx-auto login-container-width"
    >
      <h2 className="text-primary text-center mt-2">Forget Password</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
      </Form>
      <Button
        className="grow"
        variant="primary login-container-width mx-auto d-block mb-2"
        type="submit"
        onClick={handleResetPassword}
      >
        Submit
      </Button>
      {errorElement}
      <ToastContainer />
    </div>
  );
};

export default ForgetPassword;
