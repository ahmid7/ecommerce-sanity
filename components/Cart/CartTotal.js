import React from 'react'
import toast from "react-hot-toast";

import getStripe from '../../lib/getStripe'
import { Context } from '../../Context/StateContext'

function CartTotal(){
  const context = React.useContext(Context)
  /* Calculating the total price of the cart items. */
  const totalPrice = context.state.cartItems.reduce(
    (prevValue, object) => object.subTotal + prevValue,
    0
  ).toFixed(2)

  /**
   * It takes the cart items from the context state, sends them to the server, and then redirects the
   * user to the stripe checkout page.
   * @returns The response is returning a status code of 500  .
   */
  const handleCheckOut = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(context.state.cartItems)
    })

    if(response.statusCode === 500) return;

    const data = await response.json()

    console.log(data)

    toast.loading('Redirecting')

    stripe.redirectToCheckout({ sessionId: data.id })
  }

  return (
    <div className="bg-[#F9F9F9] pb-10 sm:pb-0 pt-10">
      <div className="px-4 xl:px-8">
        <h2 className="font-medium text-2xll">Cart Total</h2>

        <div className="border-b-[1px] border-[#B5B5B5] py-8">
          <div className="flex-space-between py-3">
            <p>Subtotal</p>
            <p> { totalPrice }</p>
          </div>

          <div className="flex-space-between py-3">
            <p>Shipping</p>
            <p>$10</p>
          </div>
          {/* TODO:consider removing this */}
          {/* <div className='flex justify-end'>
            <button className="uppercase text-white bg-primaryColor px-10 md:px-6 xl:px-10 py-2">
              Update
            </button>
          </div> */}
        </div>
      </div>

      <div className="flex-space-between px-4 xl:px-8 py-4">
        <p>Total</p>
        <p>{`$ ${ parseInt(totalPrice) + 10 }`}</p>
      </div>

      <div 
        className="tracking-wider cursor-pointer uppercase bg-primaryColor py-3 sm:py-4 text-white text-center"
        onClick={handleCheckOut}
      >
        pay with stripe
      </div>

    </div>
  )
}

export default CartTotal