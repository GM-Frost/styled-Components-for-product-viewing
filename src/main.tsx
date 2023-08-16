import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import ProductListPage from "./pages/product/ProductListPage.tsx";
import ProductDetailPage from "./pages/product/ProductDetailPage.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),

    children: [
      {
        path: "/",

        element: <App />,
      },
      {
        path: "/productlist",
        element: <ProductListPage />,
      },
      {
        path: "/productdetails",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
