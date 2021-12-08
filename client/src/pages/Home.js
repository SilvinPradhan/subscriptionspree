import React, { useEffect, useState } from "react";
import PriceCard from "../components/cards/PriceCard";
import axios from "axios";
import "./Home.scss";

const Home = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get("/prices");
    console.log("prices get request", data);
    setPrices(data);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("plan clicked");
  };
  return (
    <div className="d-flex justify-content-center" style={{ height: "80vh" }}>
      {/* <div className="container align-items-center d-flex">
        
      </div> */}
      <div className="container align-items-center">
        <div className="row col-md-6 offset-md-3 text-center">
          <h1 className="pt-5 fw-bold">
            Explore the right plan for your business
          </h1>
          <p className="lead pb-4">Choose a plan that suites your best!</p>
        </div>
        <div className="row flex-items-xs-middle flex-items-xs-center sub-body">
          {prices &&
            prices.map((price) => (
              <PriceCard
                key={price.id}
                price={prices}
                handleClick={handleClick}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
