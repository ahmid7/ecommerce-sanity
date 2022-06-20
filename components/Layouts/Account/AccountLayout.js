import { TopNav } from '../../index'
import Image from 'next/image'

function AccountLayout({ title, children, image }){
  return(
    <div>
      <TopNav>
        <div className='w-full bg-[#F0EDE8]'>
          <div className='auto-width'>
            <p className='py-7'>{`Home / ${ title }`}</p>
          </div>
        </div>

        <div className='auto-width'>
          <div className='flex-space-between py-20'>
            <div className='w-[32%]'>
              { children }
            </div>
            
            <div className='w-1/2'>
              <div className='relative'>
                <Image 
                  src='/Images/Sign.webp'
                  width={730}
                  height={705}
                />
              </div>
            </div>

          </div>
        </div>

      </TopNav>
    </div>
  )
}

export default AccountLayout