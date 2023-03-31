import React from "react";
import { Form } from "react-router-dom";
import Faishon1 from "../aessets/faishon1.png";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src={Faishon1}
          className="card-img"
          alt="Background"
          height="auto"
          width="100%"
        />
        <div className="card-img-overlay d-flex flex-column ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
