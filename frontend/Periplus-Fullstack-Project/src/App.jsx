import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/landing-page";
import DetailBooks from "./pages/detail-books";
import Required from "./configs/middleware";
import Cart from "./pages/cart";
import WishlistPage from "./pages/wishlist";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register />},
  { path: "/wishlist", element: <WishlistPage /> },
  { path: "/detail/:product_id", element: <DetailBooks /> },
  {
    element: <Required />,
    children: [
      {
        path: "/mycart",
        element: <Cart />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
