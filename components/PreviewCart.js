import React from 'react'
import toast from "react-hot-toast";
import { useRouter } from 'next/router';

import { Context } from '../Context/StateContext'
import { urlFor } from '../lib/client'
import getStripe from '../lib/getStripe'
import { CancelIcon } from './svgIcons'

function PreviewCart(){
  const context = React.useContext(Context)
  const router = useRouter()

  const totalPrice = context.state.cartItems.reduce(
    (prevValue, object) => object.subTotal + prevValue,
    0
  ).toFixed(2)

  function handleRoutetoCart(){
    router.push('/Cart')
  }

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
    <aside className='w-[400px] absolute right-0 top-16 pt-5 z-20 text-primaryColor bg-activeColor'>
      <div className='flex-space-between  px-10'>
        <h2 className='capitalize font-bold text-3xl '>shopping cart</h2>
        <div className='w-8 h-8 rounded-full flex items-center justify-center'>
          <CancelIcon/>
        </div>
      </div>

      <div>
        { 
          (context.state.cartItems).length > 0 &&
          <div>
            <div className='py-5  px-10'>
              {
                (context.state.cartItems)?.map(item => (
                  <div key={item._id} className=''>
                    <div className='flex items-center justify-between py-2'>
                      <div className='flex gap-x-4'>
                        <div className='w-[90px] h-[100px]'>
                          <img
                            className='w-full h-full'
                            src={urlFor(item.image)}
                            alt='product-image'
                          />
                        </div>
    
                        <div>
                          <h3 className='capitalize'>{ item.name }</h3>
                          <p className='text-[#7c7777]'>{`${ item.quantity } x $ ${ item.price }`}</p>
                        </div>
                      </div>
    
                      <div>
                        <CancelIcon/>
                      </div>
                    </div>
    
                  </div>
                ))
              }
            </div>
    
            <div className='font-medium text-primaryColor px-10 mb-10'>
              <p>{`Subtotal: $${totalPrice}`}</p>
            </div>
    
            <div className='flex text-white'>
              <button 
                className='button-style bg-[#333333] w-full'
                onClick={ handleRoutetoCart }
              >
                view cart
              </button>
              <button 
                className='button-style bg-[#474747] w-full' 
                onClick={handleCheckOut}>
                checkout
              </button>
            </div>
          </div>
        }
      </div>

      <div className='px-10 my-4 '>
        { 
          context.state.cartItems.length < 1 && 
          <div className='text-primaryColor'>
            <p>No item(s) has been added to cart yet</p>
          </div>
        }
      </div>
    </aside>
  )
}

export default PreviewCart;