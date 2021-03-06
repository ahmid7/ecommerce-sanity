import React from 'react'
import Link from 'next/link'

import { SubSection } from '../index'
import { urlFor } from '../../lib/client'


function Carousel({ productData }){
  return(
    <div className='flex gap-x-6'>
      {
        productData.map(product => {
          const { name, image, price, slug } = product
          return(
          <div key={name} className=''>
            <Link href='/product/[slug]' as={`/product/${slug.current}`}>
              <a>
                <div className='relative w-[500px] h-[616px] cursor-pointer'>
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
              </a>
            </Link>
          </div>
          )
        })
      }
    </div>
  )
}

function PopularProducts({ data }) {
  return (
    <section className='my-32'>
      <SubSection title='Top popular products' carousel={ true }>
        <div className='flex'>
          <Carousel productData={ data }/>
        </div>
      </SubSection>
    </section>
  )
}

export default PopularProducts;