import { urlFor } from '../lib/client'

function Description({ images }){
  const imagesSlice = images.slice(0, 2)
  return(
    <aside className='flex-space-between'>
      <ul className='flex w-/ gap-x-5'>
        { 
          imagesSlice.map((image, i) => {
            return(
              <li>
                <img 
                  src={urlFor(image)} 
                  alt='product image'
                  className='w-full h-[470px]'
                />
              </li>
            )
          })
        }
      </ul>

      <div className='w-[35%]'>
        <h2 className='text-primaryColor uppercase text-3xl'>We furnish the dreams</h2>
        <p className='font-light text-lg py-5 leading-relaxed'>
          Nulla porttitor massa id neque aliquam vestibulum morbi. Tempus iaculis urna id volutpat. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus
        </p>
      </div>
    </aside>
  )
}

export default Description;