import Image from 'next/image';

import { SquareIcon } from '../svgIcons'
import { Circle } from '../index'

function AboutUs() {
  
  return(
    <section className='auto-width'>
      {/* for screens other than mobile */}
      <div className='hidden my-14 md:my-16 lg:my-20 sm:flex gap-x-5 xl:gap-x-10'>
        <div className='py-2 lg:py-12'> 
          <div className='ml-10 md:ml-16 xl:ml-24'>
            <SquareIcon/>
          </div>

          <div className='sm:flex justify-end text-right py-4 lg:py-10'>
            <h2 className='font-medium text-[32px] md:text-4xl lg:text-[40px] xl:text-[50px] 2xl:text-[54px] w-11/12 lg:w-4/5 xl:w-3/5 leading-tight md:leading-tight'>
              We place the finest art for the finest craft for the finest people.
            </h2>
          </div>

          <div className='relative flex justify-between'>
            <div className='relative w-[210px] h-[120px] md:w-[250px] md:h-[180px] lg:w-[300px] lg:h-[200px] xl:w-[455px] xl:h-[273px] my-6'>
              <Image 
                src='/Images/axis.webp'
                layout='fill'
                objectFit='fill'
                alt='about us'
              />
            </div>

            <div className=''>
              <Circle className=''>
                LEARN MORE
              </Circle>
            </div>
          </div>
        </div>
        
        <div className='relative w-full lg:w-[85%] xl:w-[59%] 2xl:w-[56%]'>
          <Image
            src='/images/shelf.webp'
            alt='furniture'
            layout='fill'
            objectFit='fill'
          />
        </div>
      </div>

      {/* for mobile */}
      <div className='my-14 sm:hidden'>
        <div>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;