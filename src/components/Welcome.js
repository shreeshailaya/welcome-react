import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const WelcomePage = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-gradient">
      <div className="text-center">
        <h1 className="display-4 mb-4 animate__animated animate__fadeInDown">
          Welcome to Test Webpage
        </h1>
        <p className="lead mb-5 animate__animated animate__fadeInUp">
          Where Innovation Meets Elegance
        </p>
        <button className="btn btn-success btn-lg animate__animated animate__fadeIn">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
