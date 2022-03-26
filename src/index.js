import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsContextProvider } from "../src/Context/ProductsContext"
import { AuthContextProvider } from "../src/Context/AuthContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductsContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ProductsContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
