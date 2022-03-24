export const productsReducerFunction = (state, action) => {
    switch (action.type) {
        case 'ON_SUCCESS':
            return {
                ...state,
                products: action.payload
            }
        case 'FILTER_BY_PRICE_RANGE':
            return {
                ...state,
                priceRange: action.payload
            }
        case 'HIGH_TO_LOW':
            return {
                ...state,
                sortBy: action.payload
            };
        case 'LOW_TO_HIGH':
            return {
                ...state,
                sortBy: action.payload
            };
        case 'GET_CATEGORY':
            if (state.category.includes(action.payload)) {
                console.log([...state.category].filter(
                    (eachCategory) => eachCategory !== action.payload))
                return {
                    ...state,
                    category: [...state.category].filter(
                        (eachCategory) => eachCategory !== action.payload),
                };
            }
            return {
                ...state,
                category: [...state.category, action.payload],
            };
        case "SORT_BY_RATING":
            return {
                ...state,
                rating: action.payload
            };
        case "CLEAR_ALL":
            return {
                ...state,
                sortBy: null,
                rating: 0,
                priceRange: 3000,
                category: [],
            };
        default:
            return state
    }
}

