import React from "react";
import { 
  AiOutlinePlus,
  AiOutlineMinus
} from 'react-icons/ai'

import { Context } from '../Context/StateContext'
import { CancelIcon } from './svgIcons'
import { urlFor } from '../lib/client'


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
  const context = React.useContext(Context)

  return(
    <div className="flex items-start py-20 gap-x-12">
      <div className="flex-1 ">

        <div className="flex-space-between text-center font-medium">
          <p className="w-1/2">Product</p>
          <p className="cart-header">Price</p>
          <p className="cart-header">Quantity</p>
          <p className="cart-header">SubTotal</p>
        </div>

        <div className="border-y-2 py-4 mt-4">
            {(context.state.cartItems)?.map(item => {
              const { image, _id, price, quantity, name } = item
              return (
                <div key= {_id}>
                  <div className="flex items-center">
                    <div className="w-1/2 flex items-center ">
                      <CancelIcon/>

                      <div className="w-[80px] h-[100px] ml-5">
                        <img 
                          src={urlFor(image)} 
                          onClick={() =>updateImageIndex(i)} 
                          className="w-full h-full"
                        />
                      </div>

                      <div className="ml-20">
                        { name }
                      </div>

                    </div>

                    <p className="cart-header text-center">{ price }</p>

                    <div className="cart-header flex justify-center">
                      <div className="inline-block">
                        <div className="flex-space-between">
                          <span className="">
                            <AiOutlineMinus/>
                          </span>

                          <p className="h-10 w-10 flex-space-center">{quantity}</p>

                          <span className="">
                            <AiOutlinePlus/>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="cart-header text-center">
                      {`$ ${price * quantity}`}
                    </div>

                  </div>

                </div>
              )
            })}
        </div>
      </div>
      
      <div className="w-[30%]">
        <CartTotal/>
      </div>
    </div>


  )
}

export default CartItems