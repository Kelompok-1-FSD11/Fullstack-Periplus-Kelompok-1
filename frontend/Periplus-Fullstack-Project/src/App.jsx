import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/landing-page";
import DetailBooks from "./pages/detail-books";
import Required from "./configs/middleware";
import Cart from "./pages/cart";
import Login from "./pages/auth/login";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/detail/:name", element: <DetailBooks /> },
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
