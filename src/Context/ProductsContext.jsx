import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { productsReducerFunction } from "../Reducer/ProductsReducer.js";
import axios from "axios";
import { filterByPriceRange } from "../Utils/filterByPriceRange.js";
import { sortByPrice } from "../Utils/sortByPrice.js";
import { filterByCategory } from "../Utils/filterByCategory.js";
import { filterByRating } from "../Utils/filterByRating.js";
import { uniqueCategory } from "../Utils/uniqueCategory.js";

const ProductsContext = createContext();

const initialState = {
  sortBy: null,
  rating: 0,
  priceRange: 3000,
  products: [],
  category: [],
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducerFunction, initialState);
  const { products, priceRange, sortBy, category, rating } = state;

  // for toggling sidebar
  const [active, setActive] = useState(false);

  // Get unique Category Name
  const getUniqueCategory = uniqueCategory(products, "category");

  // Filter By PriceRange
  const getSortByPrice = sortByPrice(products, sortBy);

  //   Filter By Price Range
  const getFilterByPriceRange = filterByPriceRange(getSortByPrice, priceRange);

  //   Filter By Category
  const getFilterByCategory = filterByCategory(getFilterByPriceRange, category);

  //   Filter By Rating
  const getFilterByRating = filterByRating(getFilterByCategory, rating);

  const filteredProducts = getFilterByRating;

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        dispatch({
          type: "ON_SUCCESS",
          payload: products,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        state,
        dispatch,
        filteredProducts,
        getUniqueCategory,
        active,
        setActive,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => useContext(ProductsContext);

export { useProductsContext, ProductsContextProvider };
