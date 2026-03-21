import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import ProfileHome from "../pages/ProfileHome";
import Orders from "../pages/orders";
import Settings from "../pages/settings";
import Product from "../pages/Product"; // 🔥 ADD THIS
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,   // 🔥 ADD THIS
    children: [
      { path: "login", element: <Login /> },
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "product/:id", element: <Product /> },
      {
        path: "profile",
        element: <Profile />,
        children: [
          { index: true, element: <ProfileHome /> },
          { path: "orders", element: <Orders /> },
          { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },
]);

export default router;