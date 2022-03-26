import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { useAuthContext } from "./AuthContext";
import { cartReducer } from "../Reducer/CartReducer";
import axios from "axios";

const CartContext = createContext();

const initialState = {
  cart: [],
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { cart } = state;
  const { token, user } = useAuthContext();

  // get all items of the cart from the db
  useEffect(() => {
    {
      token &&
        (async () => {
          try {
            const {
              data: { cart },
            } = await axios("api/user/cart", {
              headers: {
                authorization: token,
              },
            });

            dispatch({ type: "GET_ALL_ITEM_OF_CART", payload: cart });
          } catch (error) {
            console.log(error);
          }
        })();
    }
  }, [token, user]);

  //adds a new item to the cart of the user in the db
  const addToCart = (product) => {
    if (cart.find((eachProduct) => eachProduct._id === product._id)) {
      return;
    } else {
      (async () => {
        try {
          const {
            status,
            data: { cart },
          } = await axios.post(
            "/api/user/cart",
            { product },
            {
              headers: {
                authorization: token,
              },
            }
          );
          if (status === 201) {
            dispatch({
              type: "ADD_TO_CART",
              payload: cart,
              productId: product._id,
            });
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };

  // Decrement Cart quantity
  const decrementQuantity = async (product, type) => {
    const productId = product._id;

    if (product.qty === 1) {
      return;
    } else {
      try {
        const {
          data: { cart },
        } = await axios.post(
          `/api/user/cart/${productId}`,
          {
            action: {
              type: type,
            },
          },
          {
            headers: {
              authorization: token,
            },
          }
        );

        dispatch({ type: "DECREMENT_QUANTITY", payload: cart });
      } catch (error) {
        console.log(error);
      }
    }
  };

  //Increment cart quantity
  const incrementQuantity = async (product, type) => {
    const productId = product._id;

    try {
      const {
        data: { cart },
      } = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: type,
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      dispatch({ type: "INCREMENT_QUANTITY", payload: cart });
    } catch (error) {
      console.log(error);
    }
  };

  // Delete From Cart
  const deleteCartItem = async (product) => {
    const productId = product._id;

    try {
      const {
        status,
        data: { cart },
      } = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
          authorization: token,
        },
      });

      if (status === 200) {
        dispatch({ type: "DELETE_PRODUCT", payload: cart });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider value={{ state, dispatch, addToCart, incrementQuantity, decrementQuantity, deleteCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartContextProvider };
