function cartReducer(state, action) {
  switch (action.type) {
    case "GET_ALL_ITEM_OF_CART":
      return {
        ...state,
        cart: action.payload
      }
    case "ADD_TO_CART":
      return {
        ...state,
        cart: action.payload
      }
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: action.payload,
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cart: action.payload,
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state
  }

}

export { cartReducer };
