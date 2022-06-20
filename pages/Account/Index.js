import React from 'react'

import { AccountLayout, Register, Login } from '../../components/index'

function Account(){
  const [ activeComponent, setActiveComponent ] = React.useState('Login')
  const updateActiveComponent = (event) => {
    const innerText = event.target.innerText
    setActiveComponent(innerText)
  }
  return (
    <section>
      <AccountLayout 
        title='My Account'
        image='/Images/Sign.webp'
      >
        {/* FIXME: check tailwind arbitrary selector  */}
        <div className='text-primaryColor font-normal text-[40px] flex-space-between py-6'>
          <p className={`cursor-pointer ${activeComponent ==='Login' ? '' : 'opacity-20'}`}
            onClick = { (e) => { updateActiveComponent(e) } }
          >
            Login
          </p>
          <p className={`cursor-pointer ${activeComponent ==='Register' ? '' : 'opacity-20'}`}
            onClick = { (e) => { updateActiveComponent(e) } }
          >
            Register
          </p>
        </div>
        
        <div>
          { activeComponent === 'Login' &&  <Login/> }
          { activeComponent === 'Register' && <Register/> }
        </div>

      </AccountLayout>
    </section>
  )
}


export default Account