import React from 'react'
import { urlFor } from '../../lib/client'

function ProductImage({ images }){
  const [imageIndex, setImageIndex] = React.useState(0)
  function updateImageIndex(index){
    setImageIndex(index)
  }
  
  return(
    <div className='flex flex-col xl:flex-row gap-y-4 xl:gap-y-0 gap-x-4 xl:gap-x-10'>
      <ul className='order-2 xl:order-1 flex gap-x-3 xl:gap-x-0 xl:flex-col'>
        {
          images.map((image, i) =>{
            return(
              <li className={` sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] xl:w-[85px] xl:h-[90px] 2xl:w-[95px] 2xl:h-[110px] mb-5 ${imageIndex === i ? 'border-2 border-activeColor' : ''}`} key={ i }>
                <img 
                  src={urlFor(image)} 
                  onClick={() =>updateImageIndex(i)} 
                  className="w-full h-full"
                />
              </li>
            )
          })
        }
      </ul>

      <div className='order-1 xl:order-2 w-full  sm:w-[340px] sm:h-[380px] md:w-[390px] md:h-[460px] lg:w-[500px] lg:h-[560px] xl:w-[600px] xl:h-[650px] 2xl:w-[700px] 2xl:h-[790px]'>
        <img 
          src={urlFor(images && images[imageIndex])}
          className='w-full h-full'
        />
      </div>
    </div>
  )
}

export default ProductImage