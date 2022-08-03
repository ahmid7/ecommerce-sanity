/* eslint-disable @next/next/no-img-element */
import { FurnitureIcon } from '../svgIcons'
import { Circle } from '../index'

function HeroContent(){
  return(
    <div className="auto-width py-6 md:py-0 font-medium">

      <div className="flex-space-between flex-col md:flex-row relative h-[330px] md:h-[290px] lg:h-[400px] xl:h-[505px] 2xl:h-[526px]">
        <h4 
          className="sm:py-12 md:py-0 sm:mb-10 lg:mb-10 xl:mb-5 md:pl-6 lg:pl-12 xl:pl-12 2xl:pl-0 text-[34px] sm:text-[40px] md:text-[45px] lg:text-[59px] xl:text-[71px] 2xl:text-[88px] leading-tight text-primaryColor"
        >
          We’re a furniture <br/> company
          <span className="text-activeColor">
            {``} from the US
          </span>
        </h4>
        
         {/* FIXME: change the image to next/image */}
        <img
          className='sm:absolute w-full md:w-[56%] lg:w-[55%] xl:w-1/2 h-full sm:right-0 sm:top-0'
          src="./Images/furnitureHero.webp" 
          alt="furniture-image"
        />

        <Circle style={'z-10 position-absolute'}>
          Shop Now
        </Circle>
      </div>

    {/* FIXME: fix the padding top */}
      <div className="mt-4 sm:mt-0  md:pl-14 lg:pl-28 2xl:pl-24 md:pt-6 font-bold text-[130px] relative flex overflow-hidden">
        <div className="py-4">
          <FurnitureIcon />
        </div>
        
        {/* FIXME: change the image to next/image */}
        <img 
          className='xl:h-[740px] 2xl:h-[790px]'
          src="./Images/24.jpg"
          alt='furniture-image'
        />
      </div>
    </div>
  )
}

export default HeroContent