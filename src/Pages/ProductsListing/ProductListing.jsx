import { useState, useEffect } from "react";
import "../ProductsListing/ProductListing.css";
import "../../CSS/Reset.css";
import { SideBar } from "../../Components/SideBar/SideBar";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { useProductsContext } from "../../Context/ProductsContext";

function ProductListing() {
  const { filteredProducts } = useProductsContext();

  return (
    <div>
      <div className="main-container">
        <SideBar />

        <main className="products-wrapper">
          <h2 className="products-heading">All Products</h2>
          {filteredProducts.map((eachProduct, i) => {
            return <ProductCard eachProduct={eachProduct} key={i} />;
          })}
        </main>
      </div>
    </div>
  );
}

export { ProductListing };
