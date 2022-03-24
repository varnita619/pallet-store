import { Link } from "react-router-dom";
import "../ProductCard/ProductCard.css";

function ProductCard({
  eachProduct: { _id, name, company, imageURL, rating, price, category, inStock },
}) {
  return (
    <>
      <div key={_id}>
        <div className="card">
          <Link to="/wishlist">
            <span className="card-badge">
              <i className="far fa-heart"></i>
            </span>
          </Link>
      
          { !inStock && <button className="outOfStock-btn">Out Of Stock</button>}
          <div className="card-image">
            <img src={imageURL} alt="card-image" />
          </div>

          <div className="card-details">
            <h5>{name}</h5>
            <span>{company}</span>
            <p>{category}</p>
            <p>⭐{rating}/5</p>
            
          </div>
          <div className="card-pricing">
            <h4>&#8377;{price}</h4>
          </div>

          <div className="card-buttons">
            <Link to="/cart" className="btn1 cart-btn">
              <i className="fas fa-shopping-cart"></i> Add to cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export { ProductCard };
