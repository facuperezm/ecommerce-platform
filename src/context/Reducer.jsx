export const ACTIONS = {
  GETPRODUCTS: "GETPRODUCTS",
  ADDTOCART: "ADDTOCART",
  DELETEITEM: "DELETEITEM",
};

const Reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GETPRODUCTS:
      return { ...state, products: action.payload };
      console.log(action.payload, "este es el payload");
    case ACTIONS.ADDTOCART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    }
    // return {
    //   ...state,
    //   cart: [
    //     ...state.cart,
    //     state.products.filter((ite) => ite.id == parseInt(action.payload)),
    //   ],
    // };
    case ACTIONS.DELETEITEM:
      return {
        ...state,
        cart: state.cart.filter((items) => items[0].id !== action.payload),
      };
    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

export default Reducer;
