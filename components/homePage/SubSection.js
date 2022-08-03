import { 
  TriangleIcon,
  LeftIcon,
  RightIcon
} from '../svgIcons'

function SubSection(props){
  return(
    <div className='auto-width overflow-hidden'>
      <div className={`flex-space-between mb-5 lg:mb-8 xl:mb-12`}>
        <div className='flex-space-between gap-x-1 sm:gap-x-3 lg:gap-x-4 xl:gap-x-6 text-primaryColor font-medium text-2xl md:text-[30px] md:text-4xl lg:text-5xl xl:text-[56px]'>
          <TriangleIcon/>
          <h2>{ props.title }</h2>
        </div>

        {  
          props.carousel && 
          <div className='flex gap-x-2'>
            <div className='carousel-button border-[1px]'>
              <LeftIcon/>
            </div>

            <div className='carousel-button bg-activeColor'>
              <RightIcon/>
            </div>
          </div>
        }

        { 
          props.subTitle &&
          <div className='hidden sm:block text-sm leading-relaxed xl:text-base w-2/6 lg:w-1/4'>
            <h4 className='text-black'>{ props.subTitle }</h4>
          </div>
        }

      </div>

      <div>
        {props.children}
      </div>
    </div>
  )
}

export default SubSection