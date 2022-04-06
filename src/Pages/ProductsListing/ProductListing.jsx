import "../ProductsListing/ProductListing.css";
import "../../CSS/Reset.css";
import { SideBar, ProductCard, NavBar } from "../../Components";
import { useProductsContext } from "../../Context/ProductsContext";

function ProductListing() {
  const { filteredProducts } = useProductsContext();

  return (
    <div>
      <NavBar />
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
