import React, { useState, useCallback } from "react";
import "../NavBar/NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../logo.png";
import { useAuthContext } from "../../Context/AuthContext";
import { useCartContext } from "../../Context/CartContext";
import { useWishlistContext } from "../../Context/WishlistContext";
import { useProductsContext } from "../../Context/ProductsContext";
import debounce from "lodash.debounce";
import { useRef } from "react";
import {SearchResult} from "../../Components";

function NavBar() {
  const { token, userLogout } = useAuthContext();
  const {
    state: { cart },
  } = useCartContext();
  const {
    state: { wishlist },
  } = useWishlistContext();
  const navigate = useNavigate();
  const {
    active,
    setActive,
    state: { products },
  } = useProductsContext();
  console.log(products);

  const [searchWord, setSearchWord] = useState({ query: "" });
  const [showSearchResult, setShowSearchResult] = useState(false);

  const SearchInputHandler = (event) => {
    if (/^\s/.test(event.target.value)) {
      setShowSearchResult(false);
      return;
    } else {
      if (event.target.value.length > 0) {
        setShowSearchResult(true);
        setSearchWord((prev) => ({ ...prev, query: event.target.value }));
      } else {
        setShowSearchResult(false);
      }
    }
  };

  const debouncedChangeHandler = useCallback(
    debounce(SearchInputHandler, 500),
    []
  );

  const inputRef = useRef();

  return (
    <div className="nav-bar">
      <div className="nav-bar_row">
        <div className="nav-bar_section--align-start">
          <button
            className="nav-bar_action-item"
            onClick={() => setActive(!active)}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <Link to="/" className="nav-links">
            Home
          </Link>
          <Link to="/productlisting" className="nav-links">
            Shop
          </Link>
        </div>
        <div className="search-container">
          <input
          ref={inputRef}
            onChange={debouncedChangeHandler}
            type="text"
            placeholder="search"
            className="search"
          />

          
            {/*Search result start  */}
            {showSearchResult && (
              <SearchResult
                searchWord={searchWord}
                setSearchWord={setSearchWord}
                setShowSearchResult={setShowSearchResult}
                inputRef = {inputRef}
              />
            )}
            {/*Search result end  */}

        </div>

        <div className="nav-bar_section--align-end">
          <Link to="/login">
            <i className="fas fa-user icon"></i>
          </Link>

          <div
            className="badge"
            onClick={() => (token ? navigate("/cart") : navigate("/login"))}
          >
            <i className="fas fa-shopping-cart icon icons-badge"></i>
            {token && (
              <span className=" badge-icon-number">{cart?.length}</span>
            )}
          </div>

          <div
            className="badge"
            onClick={() => (token ? navigate("/wishlist") : navigate("/login"))}
          >
            <i className="far fa-heart ico icon icons-badge"></i>
            {token && (
              <span className=" badge-icon-number">{wishlist?.length}</span>
            )}
          </div>

          <div
            onClick={() => {
              userLogout(), navigate("/logout");
            }}
          >
            {token && <i className="fas fa-sign-out-alt icon"></i>}
          </div>
        </div>
      </div>
    </div>
  );
}

export { NavBar };
