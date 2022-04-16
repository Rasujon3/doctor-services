import React from "react";
import { Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-column justify-content-center h-100">
            <h1 className="display-2 fw-bold text-blue">
              Razor Dirt Rocket Electric Motocross
            </h1>
            <p className="fs-5">
              Large pneumatic, knobby tires and dual suspension provide maximum
              support and performance to handle rough terrain.
            </p>
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
              src="https://m.media-amazon.com/images/I/61CLm-4jlnL._AC_SL1000_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
