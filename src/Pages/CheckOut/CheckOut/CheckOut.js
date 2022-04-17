import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOut = () => {
  const handleOnSumit = (event) => {
    const email = event.target.email.value;
    console.log(email);
    toast("Submitted Successfully");
  };
  return (
    <div className="container register-form">
      <h2 style={{ textAlign: "center" }} className="text-primary">
        Fill up this form
      </h2>
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Email Address" required />
        <input
          type="number"
          name="number"
          placeholder="Phone Number"
          required
        />
        <input type="text" name="timeSlote" placeholder="Time Slote" required />
        <button
          className="reg-btn d-block mx-auto btn btn-primary mt-2"
          type="submit"
          onClick={handleOnSumit}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CheckOut;
