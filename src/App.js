import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components";
import { Home, Cart, WishList, ProductListing, Login, Logout, Signup } from "./Pages";
import MockMan from "./MockMan/MockMan";
import "./CSS/Reset.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/productlisting" element={<ProductListing />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/mock-api" element={<MockMan endpointsList={
            "/api/products"
          } />}></Route>

        </Routes>
        <Footer />
      </div>

    </div>
  );
}

export default App;
