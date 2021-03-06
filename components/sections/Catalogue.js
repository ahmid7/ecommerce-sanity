import Link  from 'next/link'

import { urlFor } from '../../lib/client'

function Catalogue({ data }){
  return(
    <section>
      <div className='grid grid-cols-4'>
        {
          data?.map(product =>{
            const { name, image, slug } = product
            return(
              <div className='h-[480px]' key={ name }>
                <Link href='/product/[slug]' as={`/product/${slug.current}`}>
                  <aa>
                    <img 
                      src={ urlFor(image && image[0])}
                      alt={ name }
                      className='w-full h-full'
                    />
                  </aa>
                </Link>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Catalogue