import React, { useState } from "react";
import Layout from "../../Components/Layout/l";
import "./style.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <Layout>
        <input
          style={{
            margin: 10,
            outline: "none",
            border: "none",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
            padding: 20,
            borderRadius: 10,
            fontSize: 15,
          }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="email"
        ></input>
        <input
          style={{
            margin: 10,
            outline: "none",
            border: "none",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
            padding: 20,
            borderRadius: 10,
            fontSize: 15,
          }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type={"password"}
          placeholder="Password"
          value={password}
        ></input>

        <button
          className="myButton"
          type="submit"
          onClick={(e) => {
            console.log(email);
            console.log(password);
            e.preventDefault();
          }}
          disabled={email === "" || password === "" ? true : false}
        >
          Login
        </button>
      </Layout>
    </form>
  );
};

export default Login;
