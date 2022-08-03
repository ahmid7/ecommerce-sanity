import Link from "next/link"

import { EmptyCartIcon } from '../svgIcons'

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

export default EmptyCart;