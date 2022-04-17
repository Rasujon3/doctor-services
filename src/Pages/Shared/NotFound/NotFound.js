import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-0">
            <div className="d-flex flex-column justify-content-center h-100">
              <h1 className="display-2 fw-bold text-blue">Error 404</h1>
              <p className="fs-5">
                Oops! The page you're looking for isn't here.
              </p>
              <p className="fs-5">
                You might have the wrong address, or the page may have moved.
              </p>
            </div>
          </div>
          <div className="col-md-6 order-1">
            <div className="d-flex justify-content-center align-items-center py-3">
              <img
                className="img-fluid"
                src="https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
