import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, location, price, visitingTime } = service;
  const navigate = useNavigate();
  const navigateToCheckoutPage = (id) => {
    navigate(`/checkout/${id}`);
  };
  return (
    <div className="service grow">
      <img className="w-100" src={img} alt={name} />
      <h4 className="text-decoration-underline">Chamber-{id}</h4>
      <h2>{name}</h2>
      <h5>Consultation fees: {price} taka</h5>
      <p>
        <small>Location: {location}</small>
      </p>
      <p className="text-muted">Visiting Time: {visitingTime}</p>
      <button
        onClick={() => navigateToCheckoutPage(id)}
        className="btn btn-primary"
      >
        GET APPOINTMENT
      </button>
    </div>
  );
};

export default Service;
