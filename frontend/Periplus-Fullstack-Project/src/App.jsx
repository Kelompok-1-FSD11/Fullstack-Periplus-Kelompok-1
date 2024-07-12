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
  { path: "/detail/:name", element: <DetailBooks /> },
  { path: "/mycart", element: <Cart /> },
  { path: "/wishlist", element: <WishlistPage /> },
  // {
  //   element: <Required />,
  //   children: [
  //     {
  //       path: "/mycart",
  //       element: <Cart />,
  //     },
  //   ],
  // },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
