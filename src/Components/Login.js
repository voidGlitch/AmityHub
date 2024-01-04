import React from "react";
import InputLabel from "./InputLabel";
import SideNavb from "./SideNavb";

const styles = {
  padding: "20px 0px 20px 15px",
  "text-align": "center",
  display: "flex",
  "flex-direction": "column",
};

function Login() {
  return (
    <div style={styles}>
      <h1>Login</h1>

      <InputLabel
        className="container"
        label="E-mail"
        placeholder="Enter your email"
      />
      <InputLabel
        className="container"
        label="password"
        placeholder="Enter your password"
      />
    </div>
  );
}

export default Login;
