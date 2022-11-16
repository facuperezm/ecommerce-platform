export const ACTIONS = {
  GETPRODUCTS: "GETPRODUCTS",
  ADDTOCART: "ADDTOCART",
  DELETEITEM: "DELETEITEM",
  CLEARCART: "CLEARCART",
  DELETEALL: "DELETEALL",
  ADDONE: "ADDONE",
};

const cartInitialState = {
  products: [],
  cart: [],
};

import Swal from "sweetalert2";

const Reducer = (state, action) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  switch (action.type) {
    case ACTIONS.GETPRODUCTS: {
      return { ...state, products: action.payload };
    }

    case ACTIONS.ADDTOCART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      Toast.fire({
        icon: "success",
        title: `${newItem.title} added to cart`,
      });
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
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case ACTIONS.DELETEALL: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case ACTIONS.ADDONE: {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
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
