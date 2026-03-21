import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import ProfileHome from "../pages/ProfileHome";
import Orders from "../pages/orders";
import Settings from "../pages/settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "profile",
  element: <Profile />,
  children: [
    {
      index: true,    
      element: <ProfileHome />,
    },
    {
      path: "product/:id",
      element: <Product />,
    },
    {
      path: "orders/",
      element: <Orders />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
  ],
      },
    ],
  },
]);

export default router;