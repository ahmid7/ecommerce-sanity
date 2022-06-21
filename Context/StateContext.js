import 
  React , 
  {
    createContext,
    useContext, 
    useEffect, 
    useReducer,
  }
from "react";
import toast from "react-hot-toast";

// TODO: add toast

export const Context = createContext();

const initalState = {
  showCart: false,
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  quantity: 1,
}

const reducer = (state, action) => {
  switch(action.type) {
    /* Increasing the quantity by 1. */
    case 'increaseQuantity': 
      return {
        ...state,
        quantity: state.quantity + 1,
      }

    case 'decreaseQuantity':
      /* Checking if the quantity is less than 1. If it is, it will return the state and set the
      quantity to 1. */
      if(state.quantity - 1 < 1){
        return {
          state,
          quantity: 1
        }
      }

      /* Returning the state and decreasing the quantity by 1. */
      return {
        ...state,
        quantity: state.quantity - 1,
      }

    case 'addToCart':
      const checkItemInCart = state.cartItems.find(item => item._id === action.payload._id)
      if(checkItemInCart) {
        return{
          ...state,
          totalPrice: state.totalPrice + (action.payload.price * action.payload.quantity ),
          totalQuantities: state.totalQuantities + action.payload.quantity,
          cartItems: state.cartItems.map(item => {
            if(item._id === action.payload._id) {
              return {
                ...item,
                quantity: item.quantity + action.payload.quantity,
              }
            }
          })
        }
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            action.payload
          ]
        }
      }
    
    default:
      return state;
  }
}

const StateContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return(
    <Context.Provider value={{ state: state, dispatchAction: dispatch  }}>
      {children}
    </Context.Provider>
  )
}

export default StateContext;
