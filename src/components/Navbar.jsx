import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <h2>🛒 Shopping App</h2>

      <Link to="/">Home</Link> |{" "}
      <Link to="/cart">Cart</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;