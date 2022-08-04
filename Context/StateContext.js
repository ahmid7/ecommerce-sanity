import 
  React , 
  {
    createContext,
    useReducer,
    useEffect
  }
from "react";
import toast from "react-hot-toast";

export const Context = createContext();

// const cartFromLocalStorage = JSON.parse( localStorage?.getItem("cart") || '[]' )

/* The initial state for the reducer */
const initialState = {
  showCart: false,
  totalPrice: 0,
  cartItems: []
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'addToCart':
      let checkItemInCart
      /* Checking if the cart is empty or not. If it is not empty, it will check if the item is already
      in the cart. */
      if((state.cartItems).length !== 0) {
        checkItemInCart = state.cartItems?.find(item => item._id === action.payload._id)
      }

      /* Checking if the item is already in the cart. If it is, it will add the quantity of the item. */
      if(checkItemInCart) {
        return {
          ...state,
          cartItems: state.cartItems.map(item => {
            if(item._id === action.payload._id) {
              return {
                ...item,
                quantity: item.quantity + action.payload.quantity,
                subTotal: item.quantity * item.price
              }
            }
          }),
        }
      } /* Adding the item to the cart. */
      else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            action.payload
          ],
        }
      }

    /* Adding the quantity of the item in the cart. */
    case 'addQtyInCart': {
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if(item._id === action.payload._id){
            return {
              ...item,
              quantity: item.quantity + 1,
              subTotal: item.quantity * item.price
            }
          }
        }),
      }
    }

    /* Subtracting the quantity of the item in the cart. */
    case 'minusQtyInCart': {
      return {
        ...state,
        /* Checking if the item is in the cart. If it is, it will minus the quantity of the item. */
        cartItems: state.cartItems.map(item => {
          if(item._id === action.payload._id){
            /* Checking if the quantity of the item is less than 1. If it is, it will not minus the
            quantity of the item. */
            if(action.payload.quantity - 1 < 1) {
              return {
                ...item,
                quantity: item.quantity
              }
            }/* Subtracting the quantity of the item in the cart. */
            else{
              return {
                ...item,
                quantity: item.quantity - 1,
                subTotal: item.quantity * item.price
              }
            }
          }
        })
      }
    }

    /* Removing the item in the cart. */
    case 'removeInCart': {
      return {
        ...state,
        cartItems: state.cartItems.filter(object => {
        return (
          object._id !== action.payload._id
        )
      })
      }
    }

    /* Toggling the cart. */
    case 'toggleCart': {
      return {
        ...state,
        showCart: !state.showCart
      }
    }
    
    default:
      return state;
  }
}

const StateContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cartItems))
    console.log(state)

  },[state.cartItems]) 
  return(
    <Context.Provider 
      value={{ 
        state: state, 
        dispatchAction: dispatch  
      }}>
      { children }
    </Context.Provider>
  )
}

export default StateContext;
