
import { urlFor } from '../../lib/client'

function Catalogue({ data }){
  return(
    <section>
      <div className='grid grid-cols-4'>
        {
          data?.map(product =>{
            const { name, image, price } = product
            return(
              <div className='h-[480px]'>
                <img 
                  src={ urlFor(image && image[0])}
                  alt={ name }
                  className='w-full h-full'
                />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Catalogue