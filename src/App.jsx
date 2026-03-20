import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <Outlet />
    </div>
  );
};

export default App;