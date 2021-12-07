import React, { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Inputs/Input";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = ({ history }) => {
  const [email, setEmail] = useState("silvinpradhan95@gmail.com");
  const [password, setPassword] = useState("Invoker20069@@");
  const handleClick = async (e) => {
    // console.log({ email, password });
    try {
      e.preventDefault();
      const { data } = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setEmail("");
        setPassword("");
        toast.success(`Welcome, ${data.user.name}`);
        localStorage.setItem("auth", JSON.stringify(data));
        history.push("/");
        console.log(data);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong.Try again");
    }
  };
  return (
    <div className="d-flex justify-content-center" style={{ height: "80vh" }}>
      <div className="container align-items-center d-flex">
        <div className="row col-md-6 offset-md-3 text-center">
          <h1 className="pt-5 fw-bold">Login</h1>
          <h4 className="lead pb-4">
            Thank you for being a part of our family.
          </h4>
          <p className="lead pb-2">
            Access your{" "}
            <span style={{ color: "#1035c7", fontWeight: "bold" }}>
              SUBSCRIPTIONS.
            </span>{" "}
            Anytime. Anywhere.
          </p>
          <div className="form-group">
            <Input
              label="Email"
              value={email}
              setValue={setEmail}
              placeholder="silvinpradhan@subscribetome.com"
              type="email"
            />
            <Input
              label="Password"
              value={password}
              setValue={setPassword}
              placeholder="********"
              type="password"
            />
            <div className="d-grid">
              <Button
                handleClick={handleClick}
                type="primary"
                text="Login"
                size="md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
