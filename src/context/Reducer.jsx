export const ACTIONS = {
  GETPRODUCTS: "GETPRODUCTS",
  ADDTOCART: "ADDTOCART",
  DELETEITEM: "DELETEITEM",
  CLEARCART: "CLEARCART",
  DELETEALL: "DELETEALL"
};

const cartInitialState = {
  products: [],
  cart: [],
};

const Reducer = (state, action) => {
  switch (action.type) {
  
    case ACTIONS.GETPRODUCTS: {
      return { ...state, products: action.payload };
    }
    
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

    case ACTIONS.DELETEITEM: {
      let itemToDelete = state.cart.find(
        (item) => item.id === action.payload
      );
      return itemToDelete.quantity > 1 ?
      {
        ...state,
        cart: state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity - 1} : item)
      } : {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    }
    case ACTIONS.DELETEALL: {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }

    }
    case ACTIONS.CLEARCART: {
      return {
        ...state,
        cart: cartInitialState.cart,
      };
    }
    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

export default Reducer;
