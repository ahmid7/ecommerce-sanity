
import {
  BrandLogo, 
  SearchIcon, 
  CartIcon, 
  HamburgerMenu
} from './svgIcons'

function Header() {
  return (
    <header className='flex-space-between'>
      <div className='pl-20'>
        <BrandLogo />
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

          <div>
            <CartIcon />
          </div>
        </div>
        
        <div className='p-7 border-l-2'>
          <HamburgerMenu/>
        </div>

      </div>
    </header>
  );
}

export default Header;