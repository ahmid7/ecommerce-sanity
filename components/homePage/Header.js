import React from 'react'
import Link from 'next/link'

import {
  BrandLogo, 
  SearchIcon, 
  CartIcon, 
  HamburgerMenu
} from '../svgIcons'
import { Context } from '../../Context/StateContext'
import { PreviewCart } from '../index'

function   Header() {
  const context = React.useContext(Context)
  const [ showCart, setShowCart] = React.useState(false)

  function toggleCart(){
    setShowCart(!showCart)
  }

  return (
    <header className='flex-space-between py-3 sm:pt-3 md:py-5 xl:py-3 2xl:py-2 px-4 md:px-0'>
      <div className=' md:pl-7 lg:pl-12 xl:pl-16 2xl:pl-20 '>

        <Link href='/' passHref>
          <a>
            <BrandLogo />
          </a>
        </Link>
      </div>

      <nav className='hidden md:block'>
        <ul className='tracking-wide md:text-sm xl:text-base flex-space-between md:gap-x-6 lg:gap-x-9 xl:gap-x-12'>
          <li><a href='#'>HOME</a></li>
          <li><a href='#'>PAGES</a></li>
          <li><a href='#'>SHOP</a></li>
          <li><a href='#'>BLOG</a></li>
          <li><a href='#'>CONTACT</a></li>
        </ul>
      </nav>

      <div className='flex-space-between gap-x-6'>
        <div className='flex-space-between gap-x-5'>
          <div>
            <SearchIcon />   
          </div>

          <div className='relative'>
            <Link href="/Cart" passHref>
              <a>
                <CartIcon />
                <div className='absolute -top-4 -right-4 bg-activeColor text-white rounded-full text-sm h-5 w-5 md:h-5 md:w-5 xl:h-6 xl:w-6 flex-space-center'>
                  { context.state.cartItems.length }
                </div>
              </a>
            </Link>
          </div>
        </div>
        
        <div className='md:p-2 lg:p-4 xl:p-7 md:border-l-2 relative' onClick = { toggleCart }>
          <HamburgerMenu/>
          { showCart && <PreviewCart/> }
        </div>

      </div>
    </header>
  );
}

export default Header;