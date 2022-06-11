import React from 'react'

import { SubSection } from '../index'
import { urlFor } from '../../lib/client'


function Carousel({ productData }){
  return(
    <div className='flex gap-x-6'>
      {
        productData.map(product => {
          const { name, image, price } = product
          return(
          <div key={name} className='relative w-[500px] h-[616px]'>
            <img 
              src={urlFor(image && image[0])} 
              alt={name}
              className='w-full h-full'
            />
            <div className='absolute left-0 bottom-0 w-full'>
              <div className='font-light flex-space-between border-t-2 border-[#F0EDE8] py-5 w-10/12 mx-auto'>
                <h3>{ name }</h3>
                <p>{`$ ${price}`}</p>
              </div>
            </div>
          </div>
          )
        })
      }
    </div>
  )
}

function PopularProducts({ data }) {
  return (
    <SubSection title='Top popular products' carousel={ true }>
      <div className='flex'>
        <Carousel productData={ data }/>
      </div>
    </SubSection>
  )
}

export default PopularProducts;