import "./App.css";

import Home from "./component/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import Cart from "./component/Cart/Cart";
import Product from "./component/Product/Product";
import Categories from "./component/Category/Category";
import CategoryDetails from "./component/Category/CategoryDetails";
import ProductDetails from "./component/Product/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product" element={<Product />} />
        <Route path="/category/:id" element={<CategoryDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
