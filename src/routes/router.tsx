import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import MyCart from "../pages/MyCart";
import MainLayout from "../components/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "productDetail/:productSlug",
        element: <ProductDetail />,
      },
      {
        path: "MyCart",
        element: <MyCart />,
      },
    ],
  },
]);
export default router;
