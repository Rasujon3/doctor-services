import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";

const CheckOut = () => {
  const [user] = useAuthState(auth);

  const handleOnSumit = (event) => {
    event.preventDefault();
    toast("Submitted Successfully");
  };
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="container register-form"
    >
      <h2 style={{ textAlign: "center" }} className="text-primary">
        Fill up this form
      </h2>
      <form onSubmit={handleOnSumit}>
        <input
          readOnly={false}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          value={user?.email && user?.email}
          readOnly={false}
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
        <input
          readOnly={false}
          type="number"
          name="number"
          placeholder="Phone Number"
          required
        />
        <input
          readOnly={false}
          type="text"
          name="timeSlote"
          placeholder="Time Slote"
          required
        />
        <button
          className="reg-btn d-block mx-auto btn btn-primary mt-2"
          type="submit"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CheckOut;
