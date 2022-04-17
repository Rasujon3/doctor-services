import React from "react";

const Blogs = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="container mt-2"
    >
      <div className="accordion" id="accordionExample">
        <div className="accordion-item mb-2">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Q1. Difference between authorization and authentication?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Authentication is the process of verifying who someone is, on the
              other hand Authorization is the process of verifying what specific
              applications, files, and data a user has access to. For example,
              the process of verifying and confirming employees ID and passwords
              in an organization is called Authentication, but determining which
              employee has access to which floor is called Authorization.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-2">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Q2. Why are you using firebase? What other options do you have to
              implement authentication?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Firebase can be seen as a server-less backend for your mobile
              apps, web apps, etc. It is a service provided by Google.Firebase
              can be used when you do not want to spend a lot of time developing
              your own backend. It can be used for rapid development. I have
              been using it in my website in production. You will not have to
              take care of servers, etc, Google will take care of it for you.
              <br />
              Usually, authentication by a server entails the use of a user name
              and password. Other ways to authenticate can be through
              Token-based authentication, Eye scanners, Speaker Recognition,
              Fingerprint scanners, Facial recognition, Cards, Retina scans,
              Voice recognition, Fingerprints etc.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-2">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Q3. What other services does firebase provide other than
              authentication?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              There are many services which Firebase provides, Most useful of
              those are:
              <ul>
                <li>
                  Cloud Firestore: Cloud Firestore is a flexible, scalable
                  database for mobile, web, and server development from Firebase
                  and Google Cloud.
                </li>
                <li>
                  Cloud Functions: Firebase Cloud Functions are fully insulated.
                  Functions are private & secure. Run your mobile backend code
                  without managing servers and low maintenance. Boost App
                  Engagement. 15+ Products & Solutions. Cross-Platform
                  Solutions. For Mobile or Web Apps.
                </li>
                <li>
                  Hosting: Firebase Hosting is production-grade web content
                  hosting for developers. With a single command, you can quickly
                  deploy web apps and serve both static and dynamic content to a
                  global CDN.
                </li>
                <li>
                  Cloud Storage: Firebase Cloud Storage is built with mobile
                  connectivity in mind. Automatically pause and resume transfers
                  as your app loses and regains connectivity.
                </li>
                <li>
                  Google Analytics: At the heart of Firebase is Google
                  Analytics, an unlimited analytics solution available at no
                  charge.
                </li>
                <li>
                  Predictions: Firebase Predictions uses the power of Google's
                  machine learning to create dynamic user groups based on users'
                  predicted behaviour.
                </li>
                <li>
                  Cloud Messaging: Firebase Cloud Messaging (FCM) is a
                  cross-platform messaging solution that lets you reliably send
                  messages at no cost.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
