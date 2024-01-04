import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>
        <Link to="/login">Login</Link>
      </h1>
      <br />
      <h1>
        <Link to="/signup">Sign Up</Link>
      </h1>
      <br />
      <br />
      <br />
      <br />
      {props.name ? `Welcome ${props.name}` : "Please login/Sign UP"}
    </div>
  );
}

export default Home;
