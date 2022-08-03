import Link from 'next/link'

import { SubSection } from '../index'
import { urlFor } from '../../lib/client'

function Product({ product }){
  const { image, name, price,slug } = product

  return(
    <Link href='/product/[slug]' as={`/product/${slug.current}`}>
      <a>
        <div className='flex flex-col sm:flex-row sm:gap-x-4 lg:gap-x-6 xl:gap-x-8 '>
          {/* FIXME: check how to do range for height in css */}
          <div className='h-[200px] sm:w-[132px] sm:h-[140px] lg:w-[145px] lg:h-[150px] xl:w-[162px] xl:h-[170px]'>
            <img 
              src={ urlFor(image && image[0]) }
              alt = { name }
              className='w-full h-full'
            />
          </div>
          
          <div className='flex-1 pt-1 sm:pt-0 text-center sm:text-left'>
            <p className='py-1 sm:py-2 text-sm sm:text-base text-primaryColor'>{ name }</p>
            <p className='text-[#C1C1C1] sm:text-lg'> {`$ ${price}`} </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

function Carousel({ productData }){
  return(
    <div className='flex justify-between sm:flex-space-between flex-wrap gap-y-4 sm:gap-y-10'>
      {
        productData.map((product) => {
          return(
            <div className="w-[49%] sm:w-[45%] lg:w-[31%] xl:w-[30%]" key={ product.name }>
              <Product product={ product }/>
            </div>
          )
        })
      }
    </div>
  )
}

function FurnitureProducts({ data }){
  return(
    <section className='my-12 md:my-16 lg:my-20'>
      <SubSection title='Furniture Products' carousel={ true }>
        <Carousel productData={ data }/>
      </SubSection>
    </section>
  )
}

export default FurnitureProducts