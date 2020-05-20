const initialState = { cart: [] };

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const productExist = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (productExist) {
        const updatedProduct = state.cart.map((cartProduct) => {
          if (cartProduct.id === action.payload.id) {
            return { ...cartProduct, qty: cartProduct.qty + 1 };
          } else {
            return { ...cartProduct, qty: 1 };
          }
        });
        return { ...state, cart: updatedProduct };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }
    }

    case "EMPTY_CART": {
      return initialState;
    }

    default:
      return { ...state };
  }
}
