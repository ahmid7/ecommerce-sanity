import React from "react"

import { 
  TopNav, 
  CartItems, 
  EmptyCart 
} from '../components/index'
import { Context } from '../Context/StateContext'


function Cart(){
  const context = React.useContext(Context)
  return(
    <TopNav>
      <div className="h-[320px] svg-background flex-space-center">
        <div className="text-center">
          <h2 className="font-bold text-primaryColor text-[64px]">Cart</h2>
          <p className="text-sm text-[#959595]">Home / Shop</p>
        </div>
      </div>

      <div className="auto-width">
        { (context.state.cartItems).length < 1 && <EmptyCart/> }
        { (context.state.cartItems).length >= 1 && <CartItems/> }
      </div>
    </TopNav>
  )
}

export default Cart