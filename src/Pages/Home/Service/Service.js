import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price, visitingTime } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    // navigate(`/service/${id}`);
    navigate("/checkout");
  };
  return (
    <div className="service">
      <img className="w-100" src={img} alt={name} />
      <h4 className="text-decoration-underline">Chamber-{id}</h4>
      <h2>{name}</h2>
      <p>Price: {price} taka</p>
      <p>
        <small>Place: {description}</small>
      </p>
      <p className="text-muted">Visiting Time:{visitingTime}</p>
      <button
        onClick={() => navigateToServiceDetail(id)}
        className="btn btn-primary"
      >
        GET APPOINTMENT
      </button>
    </div>
  );
};

export default Service;
