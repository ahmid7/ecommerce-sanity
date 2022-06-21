import React from "react"
import Link from "next/link"

import { TopNav, CartItems } from '../components/index'
import { EmptyCartIcon } from '../components/svgIcons'
import { Context } from '../Context/StateContext'

function EmptyCart(){
  return(
    <div className='auto-width'>
      <div className="flex justify-center py-24">
        <div className="">
          <div className="flex justify-center pr-3">
            <EmptyCartIcon/>
          </div>
          <h2 className="capitalize text-center text-[28px] text-primaryColor py-5">Your cart is currently empty</h2>

          <div className="flex justify-center">
            <Link href='/'>
              <a className="">
                <p className="capitalize border-2 px-6 py-3 inline-block">Return to shop</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


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
        {/* { (context.state.cartItems).length < 1 && <EmptyCart/> }
        { (context.state.cartItems).length >= 1 && <CartItems/> } */}
        <CartItems/>
      </div>
    </TopNav>
  )
}

export default Cart