import "./sass/App.css";
import "rsuite/dist/rsuite.min.css";
// import SideNavb from "./Components/SideNavb";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

const styles = {
  padding: 20,
  textAlign: "center",
};

const App = () => (
  <div>
    {/* <SideNavb className="navbars" /> */}
    {/* <div style={styles}>Hello</div> */}
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>
);

export default App;
