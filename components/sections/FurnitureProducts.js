import Link from 'next/link'

import { SubSection } from '../index'
import { urlFor } from '../../lib/client'

function Product({ product }){
  const { image, name, price,slug } = product
  
  return(
    <Link href='/product/[slug]' as={`/product/${slug.current}`}>
      <a>
        <div className='flex gap-x-10'>
          <div className='w-[162px] h-[170px]'>
            <img 
              src={ urlFor(image && image[0]) }
              alt = { name }
              className='w-full h-full'
            />
          </div>

          <div className=''>
            <p className='py-2 text-primaryColor'>{ name }</p>
            <p className='text-[#C1C1C1] text-lg'> {`$ ${price}`} </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

function Carousel({ productData }){
  return(
    <div className='flex-space-between flex-wrap gap-x-6 gap-y-10'>
      {
        productData.map((product, index) => {
          return(
            <div className="w-[30%]" key={ product.name }>
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
    <section className=''>
      <SubSection title='Furniture Products' carousel={ true }>
        <Carousel productData={ data }/>
      </SubSection>
    </section>
  )
}

export default FurnitureProducts