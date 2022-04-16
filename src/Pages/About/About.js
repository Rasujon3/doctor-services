import React from "react";
import { Button } from "react-bootstrap";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-column justify-content-center h-100">
            <h1 className="display-2 fw-bold text-blue">Ruhul Amin Sujon</h1>
            <p className="fs-5">
              My goal is I would beacame a MERN Stack developer. For my dream, I
              working hard so much. Last 4-5 months, I spent most of the time
              for learning React JS. Everyday, I am trying to learning new
              things.
            </p>
            <div>
              <a href="https://ruhul-amin-sujon-portfolio.netlify.app/">
                <Button variant="secondary">My Portfolio</Button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center py-3">
            <img
              className="img-fluid"
              src="https://i.ibb.co/YZCkmL7/ruhul-amin-sujon.png"
              alt="Ruhul Amin Sujon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
