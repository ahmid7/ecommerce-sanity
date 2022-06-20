import React from "react"

import { TopNav } from '../components/index'
function Cart(){
  return(
    <TopNav>
      <div className="h-[320px] bg-svgBg border-2 flex-space-center">
        <div className="border-2 text-center">
          <h2 className="font-bold text-primaryColor text-[64px]">Cart</h2>
          <p className="text-sm text-[#959595]">Home / Shop</p>
        </div>
      </div>
    </TopNav>
  )
}

export default Cart