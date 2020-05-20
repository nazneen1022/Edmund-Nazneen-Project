export const selectProducts = (stateRedux) => {
  return stateRedux.products.products;
};
export const selectCartProducts = (stateRedux) => {
  return stateRedux.cart.cart;
};

export default selectProducts;
