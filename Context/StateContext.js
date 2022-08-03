import 
  React , 
  {
    createContext,
    useReducer,
  }
from "react";
import toast from "react-hot-toast";

export const Context = createContext();

const initialState = {
  showCart: false,
  totalPrice: 0,
  cartItems: [],
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'addToCart':
      let checkItemInCart
      if((state.cartItems).length !== 0) {
        checkItemInCart = state.cartItems?.find(item => item._id === action.payload._id)
      }

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
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            action.payload
          ],
        }
      }

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

    case 'minusQtyInCart': {
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if(item._id === action.payload._id){
            if(action.payload.quantity - 1 < 1) {
              return {
                ...item,
                quantity: item.quantity
              }
            }else{
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

  return(
    <Context.Provider value={{ state: state, dispatchAction: dispatch  }}>
      {children}
    </Context.Provider>
  )
}

export default StateContext;
