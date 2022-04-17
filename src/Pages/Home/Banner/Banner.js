import React from "react";
import { Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="container"
    >
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-column justify-content-center h-100">
            <h1 className="display-2 fw-bold text-blue">
              Dr. Ahmed Riad Chowdhury
            </h1>
            <p className="fs-5">MBBS, M.Phil (Psychiatry)</p>
            <p className="fs-5">Psychiatry Specialist</p>
            <div>
              <a href="https://m.media-amazon.com/images/I/61CLm-4jlnL._AC_SL1000_.jpg">
                <Button variant="secondary">Live Demo</Button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center py-3">
            <img
              className="img-fluid"
              src="https://www.daktars.com/uploads/doctor/avatar/65/07ahmed.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
