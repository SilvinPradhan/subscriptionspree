import React from "react";
import PriceCard from "../components/cards/PriceCard";
import "./Home.scss";

const Home = () => {
  return (
    <div className="d-flex justify-content-center" style={{ height: "80vh" }}>
      {/* <div className="container align-items-center d-flex">
        
      </div> */}
      <div class="container align-items-center">
        <div className="row col-md-6 offset-md-3 text-center">
          <h1 className="pt-5 fw-bold">
            Explore the right plan for your business
          </h1>
          <p className="lead pb-4">Choose a plan that suites your best!</p>
        </div>
        <div class="row flex-items-xs-middle flex-items-xs-center sub-body">
          <PriceCard />
          <PriceCard />
          <PriceCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
