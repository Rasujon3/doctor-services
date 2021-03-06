import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";

const CheckOut = () => {
  const [services, setServices] = useState([]);
  let singleService = {};
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/Rasujon3/email-password-auth/main/Services.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [id]);

  for (const service of services) {
    if (service.id === parseInt(id)) {
      singleService = service;
    }
  }

  const [user] = useAuthState(auth);

  const handleOnSumit = (event) => {
    event.preventDefault();
    toast("Submitted Successfully");
    setTimeout(() => {
      navigate("/home");
    }, 5000);
  };

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="container register-form"
    >
      <h2 style={{ textAlign: "center" }} className="text-primary">
        Fill up this form for appointment
      </h2>
      <form onSubmit={handleOnSumit}>
        <input type="text" name="name" placeholder="Your Name" />
        <input
          value={user?.email && user?.email}
          readOnly={false}
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
        <input
          type="number"
          name="number"
          placeholder="Phone Number"
          required
        />
        <input
          value={singleService?.visitingTime}
          readOnly
          type="text"
          name="timeSlote"
          placeholder="Time Slote"
          required
        />
        <button
          className="reg-btn d-block mx-auto btn btn-primary mt-2 grow"
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
