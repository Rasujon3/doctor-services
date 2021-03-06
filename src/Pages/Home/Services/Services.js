import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = `Services.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      id="services"
      className="container"
    >
      <div className="row">
        <h1 className="text-primary text-center mt-5">My Services</h1>
        <div className="services-container">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
