import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { AddProduct } from "./components/AddProduct.tsx";
import { ProductsPage } from "./pages/ProductsPage.tsx";
import { ProductElectronicsList } from "./components/ProductElectronicsList.tsx";
import { ProductJewelryTabList } from "./components/ProductJewelryTabList.tsx";
import { ProductMensTabList } from "./components/ProductMensTabList.tsx";
import { ProductWomensTabList } from "./components/ProductWomensTabList.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: null,
    children: [
      { index: true, path: "/", element: <Home /> },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/electronics",
        element: <ProductElectronicsList />,
      },
      {
        path: "/products/jewelery",
        element: <ProductJewelryTabList />,
      },
      {
        path: "/products/mens",
        element: <ProductMensTabList />,
      },
      {
        path: "/products/womens",
        element: <ProductWomensTabList />,
      },
      { path: "/products/add", element: <AddProduct /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
