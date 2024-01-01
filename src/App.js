import "./sass/App.css";
import "rsuite/dist/rsuite.min.css";
import SideNavb from "./Components/SideNavb";

const styles = {
  padding: 20,
  textAlign: "center",
};

const App = () => (
  <div>
    <SideNavb className="navbars" />
    <div style={styles}></div>
  </div>
);

export default App;
