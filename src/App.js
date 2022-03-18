import { Home } from "./Pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Cart } from "./Pages/Cart/Cart";
import { WishList } from "./Pages/WishLlist/WishList";
import { ProductListing } from "./Pages/ProductsListing/ProductListing";
import { NavBar } from "./Components/NavBar/NavBar";
import MockMan from "./MockMan/MockMan";
import {Login} from "./Pages/Login/Login";
import {Logout} from "./Pages/Logout/Logout";
import {Signup} from "./Pages/Signup/Signup";
import "./CSS/Reset.css"

function App() {
  return (
    <div className="App">

      <div>
        <NavBar />
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
