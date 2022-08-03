import React from 'react'
import { 
  AiOutlinePlus,
  AiOutlineMinus
} from 'react-icons/ai'

import { Context } from '../../Context/StateContext'
import { CancelIcon } from '../svgIcons'
import { urlFor } from '../../lib/client'


function Product () {
  const context = React.useContext(Context)

  return (
    <>
      <div className="flex-1">
        <div className="hidden sm:flex justify-between items-center text-center font-medium">
          <p className="w-1/2">Product</p>
          <p className="cart-header">Price</p>
          <p className="cart-header">Quantity</p>
          <p className="cart-header">SubTotal</p>
        </div>

        <div className="border-y-2 py-4 mt-4 flex flex-col gap-y-4 select-none">
            { context.state.cartItems.map(item => {
              const { image, _id, price, quantity, name, subTotal } = item


              /**
               * The function handleQtyInCart takes an action as an argument and dispatches an action
               * with a payload of the product's id and quantity.
               * @param action - This is the action type that will be dispatched to the reducer.
               *
               */
              function handleQtyInCart(action){
                context.dispatchAction({ 
                  type: action,
                  payload: { 
                    _id,
                    quantity     
                  } 
                })
              }

              /**
               * It dispatches an action to the store to remove the product from the cart.
               */
              function handleRemoveProduct(){
                context.dispatchAction({ 
                  type: 'removeInCart', 
                  payload: { 
                    _id
                  } 
                })
              }

              return (
                <div key= { _id }>
                  <div className="grid grid-cols-2 grid-flow-col sm:flex sm:items-center">
                    <div className="grid-row-3 sm:w-1/2 sm:flex sm:items-center ">
                      <div onClick={ handleRemoveProduct }>
                        <CancelIcon/>
                      </div>

                      <div className="sm:max-w-[50px] lg:w-[65px] xl:w-[80px] ml-4 lg:ml-5">
                        <img 
                          src={urlFor( image )} 
                          className=""
                        />
                      </div>

                      <div className="ml-3 lg:ml-6 xl:ml-16 2xl:ml-28">
                        { name }
                      </div>

                    </div>

                    <p className="cart-header text-center row-span-1">{ price }</p>

                    <div className=" cart-header flex justify-center">
                      <div className="inline-block">
                        <div className="flex-space-between">
                          <span 
                            className="cursor-pointer"
                            onClick = { handleQtyInCart.bind(this, 'minusQtyInCart') }
                          >
                            <AiOutlineMinus/>
                          </span>

                          <p className="h-10 w-10 flex-space-center">{quantity}</p>

                          <span 
                            className="cursor-pointer"
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
    </>
  )
}

export default Product;