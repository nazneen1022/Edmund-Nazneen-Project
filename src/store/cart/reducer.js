const initialState = { cart: [] };

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      console.log("state in reducer:", state);
      return { ...state, cart: [...state.cart, action.payload] };
    }
    default:
      return state;
  }
}
