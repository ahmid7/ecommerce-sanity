import { 
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus
} from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'

function ProductInfo({ name, price, details, }){
 
  return(
    <div className='flex-1 font-light'>
      <h2 className=' text-primaryColor text-3xl'>{ name }</h2>
      <p className='text-[#c1c1c1] text-2xl py-2'>{`$ ${price}`}</p>

      <div className='flex-space-between '>
        <div className='flex gap-x-1'>
          <AiFillStar color='#C3B8A5'/>
          <AiFillStar color='#C3B8A5'/>
          <AiFillStar color='#C3B8A5'/>
          <AiFillStar color='#C3B8A5'/>
          <AiFillStar color='#C3B8A5'/>
        </div>
        <p>(1 customer reviews)</p>
      </div>

      <div>
        <p className='text-lg py-5 text-[#9B9B9B] leading-[30px]'>{ details }</p>
      </div>

      <div className='flex items-center gap-x-3'>
        <div className=''>
          <AiOutlineMinus/>
        </div>

        <div className='border-2'>
          <p className='py-3 px-5'>0</p>
        </div>

        <div className=''>
          <AiOutlinePlus/>
        </div>
      </div>

      <div className='flex items-center my-10 gap-x-8'>
        <button className='uppercase border-2 py-3 px-8 border-activeColor text-activeColor'>Add to cart</button>
        <div className='cursor-pointer'>
          <MdFavoriteBorder color='#C3B8A5' fontSize={30}/>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo