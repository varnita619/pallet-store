import { createContext, useContext, useReducer } from "react";
import { useAuthContext } from "./AuthContext";
import axios from "axios";
import { wishlistReducer } from "../Reducer/WishlistReducer";

const WishlistContext = createContext();

const initialState = {
  wishlist: [],
};

const WishlistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);
  const { token } = useAuthContext();

  const addToWishlist = (product) => {
    if (state.wishlist.find((eachProduct) => eachProduct._id === product._id)) {
      return;
    } else {
      (async () => {
        try {
          const {
            status,
            data: { wishlist },
          } = await axios.post(
            "/api/user/wishlist",
            { product },
            {
              headers: {
                authorization: token,
              },
            }
          );

            if (status === 201) {
          dispatch({
            type: "ADD_TO_WISHLIST",
            payload: wishlist,
          });
            }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };

  const removeFromWishlist = (product) => {
    (async () => {
      try {
        const {
          status,
          data: { wishlist },
        } = await axios.delete(`/api/user/wishlist/${product._id}`, {
          headers: {
            authorization: token,
          },
        });

        if (status === 200) {
        dispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: wishlist,
        });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <WishlistContext.Provider
      value={{ state, dispatch, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlistContext = () => useContext(WishlistContext);

export { useWishlistContext, WishlistContextProvider };
