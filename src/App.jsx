import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Home from "./pages/Home";
import ProductDetails from './pages/ProductDetails';
import ProductForm from './pages/ProductForm';

import { getAllProducts } from "./api/productAPI";


import 
{
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SharedLayouts from "./Layout/SharedLayouts";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<SharedLayouts />}>
          <Route path="home" element={<Home/>} />

          <Route
          /**will get all products on load, */
           path="products"
           loader={getAllProducts}
          element={<Products/>} 
          />

          <Route path="products/:id" element={<ProductDetails/>} />
          <Route path="products/:id/edit" element={<ProductForm/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
