import Image from 'next/image';

import { SquareIcon } from '../svgIcons'
import { Circle } from '../index'

function AboutUs() {
  
  return(
    <section className='auto-width'>
      <div className='my-20 flex gap-x-10'>
        <div className='py-12'> 
          <div className='ml-24'>
            <SquareIcon/>
          </div>
          <div className='flex justify-end text-right py-10'>
            <h2 className='font-medium text-[54px] w-3/5 leading-tight'>
              We place the finest art for the finest craft for the finest people.
            </h2>
          </div>
          <div className='flex justify-between'>
            <div className='relative w-[455px] h-[273px] my-6'>
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

        <div className='relative w-[56%]'>
          <Image
            src='/images/shelf.webp'
            alt='furniture'
            layout='fill'
            objectFit='fill'
          />
        </div>
      </div>
    </section>
  )
}

export default AboutUs;