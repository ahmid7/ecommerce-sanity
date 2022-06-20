import React from 'react'
import { urlFor } from '../lib/client'

function ProductImage({ images }){
  const [imageIndex, setImageIndex] = React.useState(0)
  function updateImageIndex(index){
    setImageIndex(index)
  }
  
  return(
    <div className='flex gap-x-10'>
      <ul className=''>
        {
          images.map((image, i) =>{
            return(
              <li className='w-[95px] h-[110px] mb-5' key={ i }>
                <img src={urlFor(image)} onClick={() =>updateImageIndex(i)} className="w-full h-full"/>
              </li>
            )
          })
        }
      </ul>

      <div className='w-[700px] h-[790px]'>
        <img 
          src={urlFor(images && images[imageIndex])}
          className='w-full h-full'
        />
      </div>
    </div>
  )
}

export default ProductImage