export default Reducer(state, action) {
  switch (action.type) {
    case GET_PRODUCTS: 
      return {
        ...state, products: action.payload
      };
    case ADD_TO_CART: 
      return {
        ...state, cart: [
          ...state.cart, state.products.filter((item) => item.id === parseInt(payload.action))
        ],
      }
    case DELETE_ITEM: 
      return {
        ...state, 
  }
}