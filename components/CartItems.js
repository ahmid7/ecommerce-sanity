import React from "react";
import { Context } from '../Context/StateContext'

function CartTotal(){
  const context = React.useContext(Context)
  
  return (
    <div className="bg-[#F9F9F9] pt-10">
      <div className="px-8">
        <h2 className="font-medium text-2xll">Cart Total</h2>

        <div className="border-b-[1px] border-[#B5B5B5] py-8">
          <div className="flex-space-between py-3">
            <p>Subtotal</p>
            <p>{ context.state.totalPrice }</p>
          </div>

          <div className="flex-space-between py-3">
            <p>Shipping</p>
            <p>$10</p>
          </div>

          <div className='flex justify-end'>
            <button className="uppercase text-white bg-primaryColor px-10 py-2">
              Update
            </button>
          </div>
        </div>
      </div>

      <div className="flex-space-between px-8 py-4">
        <p>Total</p>
        <p>{`$ ${ context.state.totalPrice + 10 }`}</p>
      </div>

      <div className="uppercase bg-primaryColor py-4 text-white text-center">
        Proceed to checkout
      </div>

    </div>
  )
}

function CartItems(){

  return(
    <div className="flex">
      <div className="flex-1 flex-space-between">
        <p className="">Product</p>
        <p className="">Price</p>
        <p>Quantity</p>
        <p>SubTotal</p>
      </div>
      
      <div className="w-[30%]">
        <CartTotal/>
      </div>
    </div>


  )
}

export default CartItems