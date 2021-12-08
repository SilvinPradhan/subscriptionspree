import React, { useContext, useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Inputs/Input";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserContext } from "../context";

const Register = ({ history }) => {
  const [name, setName] = useState("SilvinPradhan");
  const [email, setEmail] = useState("silvinpradhan95@gmail.com");
  const [password, setPassword] = useState("Invoker20069@@");
  const [state, setState] = useContext(UserContext);

  const handleClick = async (e) => {
    // console.log({ name, email, password });
    try {
      e.preventDefault();
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setName("");
        setEmail("");
        setPassword("");
        toast.success(`You are a part of our team now. ${data.user.name}`);
        setState(data);
        localStorage.setItem("auth", JSON.stringify(data));
        history.push("/");
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
          <h1 className="pt-5 fw-bold">Let's Get Started</h1>
          <p className="lead pb-4">
            Sign up for free. No Credit Card required.
          </p>
          <div className="form-group">
            <Input
              label="Name"
              value={name}
              setValue={setName}
              autoFocus={true}
              placeholder="SilvinPradhan"
            />
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
                text="Register"
                size="md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
