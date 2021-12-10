import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context";

const PriceCard = ({ price, handleSubscription }) => {
  const [state] = useContext(UserContext);
  const dynamicDescription = (price) => {
    if (price.nickname === "BASIC") {
      return "Low Features";
    } else if (price.nickname === "STANDARD") {
      return "High Features";
    } else if (price.nickname === "PREMIUM") {
      return "Ultimate Features";
    }
  };
  const headerStyle = () => {
    if (price.nickname === "PREMIUM") return "text-warning";
    else if (price.nickname === "STANDARD") return "text-primary";
    else if (price.nickname === "BASIC") return "text-info";
  };

  const buttonText = () => {
    return state && state.token ? "Choose Plan" : "Sign up";
  };

  return (
    <div className="col-xs-12 col-lg-4">
      <div className="card text-xs-center">
        <div className="card-header">
          <h3 className="display-2">
            <span className="currency">$</span>
            {(price.unit_amount / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
            <span className="period">/month</span>
          </h3>
        </div>
        <div className="card-block text-center">
          <h4 className={`card-title ${headerStyle()}`}>
            {price.nickname} PLAN
          </h4>
          <ul className="list-group mt-3 mb-4 justify-content-center">
            <li className="list-group-item">
              <span className="text-dark fw-bold">
                {dynamicDescription(price)}
              </span>
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
          <Link to="/register">
            <button
              // onClick={() => handleSubscription(price)}
              className="btn btn-gradient mt-2"
            >
              {buttonText()}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PriceCard;
