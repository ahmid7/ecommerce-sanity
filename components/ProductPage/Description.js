import { urlFor } from '../../lib/client'

function Description({ images }){
  const imagesSlice = images.slice(0, 2)
  return(
    <aside className='flex-items-center flex-col sm:flex-row md:flex-space-between gap-y-2 sm:gap-y-0 gap-x-2 sm:gap-x-5 pt-3 sm:pt-0'>
      <ul className='flex gap-x-3 2xl:gap-x-5'>
        { 
          imagesSlice.map((image, i) => {
            return(
              <li key={image._key} className={`${ i === 1 ? 'sm:hidden md:block' : '' }`}>
                <img 
                  src={urlFor(image)} 
                  alt='product image'
                  className='w-full h-[240px] sm:h-[220px] lg:h-[350px] xl:h-[450px] 2xl:h-[470px]'
                />
              </li>
            )
          })
        }
      </ul>

      <div className='w-full sm:w-1/2 md:w-[35%]'>
        <h2 className='text-primaryColor uppercase text-xl lg:text-2xl xl:text-3xl'>We furnish the dreams</h2>
        <p className='font-light text-base xl:text-lg py-1 sm:py-3 lg:py-5 leading-relaxed capitalize'>
          Nulla porttitor massa id neque aliquam vestibulum morbi. Tempus iaculis urna id volutpat. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus
        </p>
      </div>
    </aside>
  )
}

export default Description;