import React from "react";
import { Link } from "react-router-dom";
const PriceCard = ({ price }) => {
  return (
    <div className="col-xs-12 col-lg-4">
      <div className="card text-xs-center">
        <div className="card-header">
          <h3 className="display-2">
            <span className="currency">$</span>19
            <span className="period">/month</span>
          </h3>
        </div>
        <div className="card-block text-center">
          <h4 className="card-title">Basic Plan</h4>
          <ul className="list-group mt-3 mb-4 justify-content-center">
            <li className="list-group-item">
              <span className="text-dark">Ultimate Features</span>
            </li>
            <li className="list-group-item">
              <span className="text-dark">Responsive Ready</span>
            </li>
            <li className="list-group-item">
              <span className="text-muted">Visual Composer Included</span>
            </li>
            <li className="list-group-item">
              <span className="text-muted">24/7 Support System</span>
            </li>
          </ul>
          <pre>{JSON.stringify(price, null, 4)}</pre>
          <Link to="/" className="btn btn-gradient mt-2">
            Choose Plan
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PriceCard;
