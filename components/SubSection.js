import { 
  TriangleIcon,
  LeftIcon,
  RightIcon
} from './svgIcons'

function SubSection(props){

return(
    <div className='py-12 px-60 overflow-hidden'>
      <div className={`flex-space-between`}>
        <div className='flex-space-between mb-12 gap-x-6 text-primaryColor font-medium text-[56px]'>
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
          <div className='w-1/4'>
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