import { Outlet, Link } from "react-router";

const Profile = () => {
  return (
    <div>
      <h2>👤 Profile</h2>

      {/* navigation inside profile */}
      <Link to="orders">Orders</Link> |{" "}
      <Link to="settings">Settings</Link>

      <hr />

      {/* 🔥 THIS IS REQUIRED FOR INDEX ROUTE */}
      <Outlet />
    </div>
  );
};

export default Profile;