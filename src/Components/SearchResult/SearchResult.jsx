import React from "react";
import { useProductsContext } from "../../Context/ProductsContext";
import "./SearchResult.css";
// import * as FaIcons from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ searchWord, setShowSearchResult, inputRef }) => {
  const navigate = useNavigate();

  const {
    state: { products },
  } = useProductsContext();

  const isSearched = [...products]?.filter(
    (eachProduct) =>
      eachProduct.name.toLowerCase().includes(searchWord.query.toLowerCase()) ||
      eachProduct.category
        .toLowerCase()
        .includes(searchWord.query.toLowerCase())
  );

  const singleProductHandler = (_id) => {
    //doing navigate to productId
    inputRef.current.value = "";
    navigate(`/product/${_id}`);
    setShowSearchResult(false);
  };

  return (
    <div className="search-result">
      <div className="search-result-wrapper">
        {isSearched.length === 0 ? (
          <p className="text-md" style={{ marginTop: "1rem" }}>
            Match not found 😞
          </p>
        ) : (
          isSearched?.map((eachProduct, i) => (
            <div
              className="searched-item"
              key={i}
              onClick={() => singleProductHandler(eachProduct._id)}
            >
              <div className="item-one">
                {/* <FaIcons.FaHistory /> */}
              </div>
              <div className="item-two">
                <img src={eachProduct.imageURL} alt={eachProduct.name} />
                <p>{eachProduct.name}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export { SearchResult };
