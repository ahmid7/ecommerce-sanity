import React from "react";
import { 
  AiOutlinePlus,
  AiOutlineMinus
} from 'react-icons/ai'

import { CartTotal } from './index'
import { Context } from '../Context/StateContext'
import { CancelIcon } from './svgIcons'
import { urlFor } from '../lib/client'

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

        <div className="border-y-2 py-4 mt-4 flex flex-col gap-y-4 select-none">
            {(context.state.cartItems ).map(item => {
              const { image, _id, price, quantity, name, subTotal } = item

              function handleQtyInCart(action){
                context.dispatchAction({ 
                  type: action,
                  payload: { 
                    _id,
                    quantity 
                  } 
                })
              }

              function handleRemoveProduct(){
                context.dispatchAction({ 
                  type: 'removeInCart', 
                  payload: { 
                    _id 
                  } 
                })
              }

              return (
                <div key= {_id}>
                  <div className="flex items-center">
                    <div className="w-1/2 flex items-center ">
                      <div onClick={ handleRemoveProduct }>
                       <CancelIcon/>
                      </div>

                      <div className="w-[80px] h-[100px] ml-5">
                        <img 
                          src={urlFor(image)} 
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
                          <span 
                            className=""
                            onClick = { handleQtyInCart.bind(this, 'minusQtyInCart') }
                          >
                            <AiOutlineMinus/>
                          </span>

                          <p className="h-10 w-10 flex-space-center">{quantity}</p>

                          <span 
                            className=""
                            onClick={ handleQtyInCart.bind(this, 'addQtyInCart') }
                          >
                            <AiOutlinePlus/>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="cart-header text-center">
                      {`$ ${(subTotal).toFixed(2)}`}
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