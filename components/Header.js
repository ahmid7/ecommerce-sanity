import React from 'react'
import Link from 'next/link'

import {
  BrandLogo, 
  SearchIcon, 
  CartIcon, 
  HamburgerMenu
} from './svgIcons'
import { Context } from '../Context/StateContext'
import { PreviewCart } from './index'

function Header() {
  const context = React.useContext(Context)
  const [ showCart, setShowCart] = React.useState(false)

  function toggleCart(){
    setShowCart(!showCart)
  }

  return (
    <header className='flex-space-between py-2'>
      <div className='pl-20 '>
        <Link href='/' passHref>
          <a>
            <BrandLogo />
          </a>
        </Link>
      </div>

      <nav>
        <ul className='flex-space-between gap-x-12'>
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
                <div className='absolute -top-4 -right-4 bg-activeColor text-white rounded-full h-6 w-6 flex-space-center'>
                  { context.state.cartItems.length }
                </div>
              </a>
            </Link>
          </div>
        </div>
        
        <div className='p-7 border-l-2 relative' onClick = { toggleCart }>
          <HamburgerMenu/>
          { showCart && <PreviewCart/> }
        </div>

      </div>
    </header>
  );
}

export default Header;