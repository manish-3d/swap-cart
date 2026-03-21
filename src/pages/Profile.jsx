import { Outlet, Navigate, Link } from "react-router";

const Profile = () => {
  const isLoggedIn = false; // 🔥 change to true/false to test

  // 🔥 PROTECTION
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h2>👤 Profile</h2>

      <Link to="orders">Orders</Link> |{" "}
      <Link to="settings">Settings</Link>

      <hr />

      <Outlet />
    </div>
  );
};

export default Profile;