import React from 'react'
import Link from 'next/link'

import { SubSection } from '../index'
import { urlFor } from '../../lib/client'


function Carousel({ productData }){
  return(
    <div className='flex w-full gap-x-2 lg:gap-x-3 xl:gap-x-4 2xl:gap-x-6'>
      {
        productData.map(product => {
          const { name, image, price, slug } = product
          return(
          <div key={name} className=''>
            <Link href='/product/[slug]' as={`/product/${slug.current}`}>
              <a>
                <div className='relative w-[250px]  h-[270px] sm:w-[300px] sm:h-[370px] lg:w-[400px] lg:h-[500px] xl:w-[440px] xl:h-[560px] 2xl:w-[500px] 2xl:h-[616px] cursor-pointer'>
                  <img 
                    src={ urlFor(image && image[0]) }
                    alt={ name }
                    className='w-full h-full'
                  />
                  <div className='absolute left-0 bottom-0 w-full'>
                    <div className='font-light flex-space-between border-t-2 border-[#F0EDE8] py-2 lg:py-4 xl:py-5 px-1 sm:px-3 md:px-5 lg:px-7 xl:px-10 w-full text-xs sm:text-base  mx-auto'>
                      <h3 className=''>{ name }</h3>
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
    <section className='my-6 md:my-16 lg:my-24 xl:my-32'>
      <SubSection title='Top popular products' carousel={ true }>
        <div className='flex'>
          <Carousel productData={ data }/>
        </div>
      </SubSection>
    </section>
  )
}

export default PopularProducts;