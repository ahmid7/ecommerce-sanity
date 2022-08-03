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
      <div className="h-[280px] sm:h-[320px] svg-background flex-space-center">
        <div className="text-center">
          <h2 className="font-bold text-primaryColor text-[42px] sm:text-[54px] lg:text-[60px] xl:text-[64px]">Cart</h2>
          <p className="text-sm text-[#959595]">Home / Shop</p>
        </div>
      </div>

      <div className="w-11/12 mx-auto xl:container ">
        { (context.state.cartItems).length < 1 && <EmptyCart/> }
        { (context.state.cartItems).length >= 1 && <CartItems/> }
      </div>
    </TopNav>
  )
} 

export default Cart