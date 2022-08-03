import React from 'react'
import { 
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus
} from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'

import { Context } from '../../Context/StateContext'

function ProductInfo({ product }){
  const { name, price, details, image } = product

  const [ Qty, setQty ] = React.useState(parseInt(1))

  const context = React.useContext(Context)

  function handleQty(action){
    if(action === 'add'){
      setQty((prevQty => {
        return prevQty + 1
      }))
    }else if(action === 'minus'){
      setQty((prevQty => {
        if(prevQty - 1 < 1){
          return prevQty
        }else{
          return Qty - 1
        }
      }))
    }
  }

  function handleAddToCart(){
    context.dispatchAction({ 
      type: 'addToCart',
      payload: { 
        quantity: Qty,
        image: image[0],
        _id : product._id, 
        price: price,
        name: name,
        subTotal: price * Qty
      }
    })
  }

  return(
    <div className='flex-1 font-light select-none'>
      <h2 className=' text-primaryColor text-xl lg:text-2xl xl:text-[27px] 2xl:text-3xl capitalize'>{ name }</h2>
      <p className='text-[#c1c1c1]  text-xl lg:text-2xl py-1 2xl:py-2'>{`$ ${price}`}</p>

      <div className='flex-space-between '>
        <div className='flex gap-x-0 lg:gap-x-1'>
          <AiFillStar color='#C3B8A5'/>
          <AiFillStar color='#C3B8A5'/>
          <AiFillStar color='#C3B8A5'/>
          <AiFillStar color='#C3B8A5'/>
          <AiFillStar color='#C3B8A5'/>
        </div>
        <p>(1 customer reviews)</p>
      </div>
      {/* FIXME: fix leading 7 leading 6 for responsiveness */}
      <div>
        <p className='sm:text-sm md:text-base xl:text-lg py-4 2xl:py-5 text-[#9B9B9B] leading-7 sm:leading-6 md:leading-[30px]'>{ details }</p>
      </div>

      <div className='flex items-center gap-x-8'>
        <div className='flex items-center gap-x-3 cursor-pointer'>
          <div 
            onClick={ handleQty.bind(this, 'minus') }
          >
            <AiOutlineMinus/>
          </div>

          <div className='border-2'>
            <p className='h-12 w-12 sm:h-8 sm:w-8 xl:h-10 xl:w-10 flex-space-center'>{ Qty }</p>
          </div>

          <div 
            onClick={ handleQty.bind(this, 'add') }
          >
            <AiOutlinePlus/>
          </div>
        </div>

        <div className='flex items-center my-5 xl:my-8 2xl:my-10 gap-x-8'>
          <button 
            className='uppercase text-sm md:text-base border-2 py-3 px-5 md:px-8 border-activeColor text-activeColor'
            onClick={ handleAddToCart }
          >
            Add to cart
          </button>
          
          <div className='cursor-pointer hidden sm:block' onClick={ handleQty.bind(this, 'minus')}>
            <MdFavoriteBorder color='#C3B8A5' className=' text-2xl md:text-[30px]'/>
          </div>
        </div>
      </div>

      <div className='font-normal sm:text-sm text-primaryColor'>
        <div className='my-2'>
          <p className='tags-container-flex uppercase' onClick={ handleQty.bind(this, 'add')}>
            sku ref: 
            <span className='tags'> la-1234</span>
          </p>
        </div>

        <div className='my-2'>
          <p className='tags-container-flex'>
            Categories: 
            <span className='tags'>Table, Decoration, Furniture</span>
          </p>
        </div>

        <div className='my-2'>
          <p className='tags-container-flex'>
            Tags: 
            <span className='tags'>Furniture, Modern</span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default ProductInfo