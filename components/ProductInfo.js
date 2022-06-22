import React from 'react'
import { 
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus
} from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'

import { Context } from '../Context/StateContext'

function ProductInfo({ product }){
  const { name, price, details, image } = product

  const context = React.useContext(Context)

  function handleQuantity( value){
    context.dispatchAction({ type: value })
  }

  function handleAddToCart(){
    context.dispatchAction({ 
      type: 'addToCart',
      payload: { 
        image: image[0],
        _id : product._id,
        quantity: context.state.quantity, 
        price: price,
        name: name
      }
    })
  }

  return(
    <div className='flex-1 font-light select-none'>
      <h2 className=' text-primaryColor text-3xl capitalize'>{ name }</h2>
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

      <div className='flex items-center gap-x-3 cursor-pointer'>
        <div 
          onClick={ handleQuantity.bind(this, 'decreaseQuantity') }
        >
          <AiOutlineMinus/>
        </div>

        <div className='border-2'>
          <p className='h-10 w-10 flex-space-center'>{ context.state.quantity }</p>
        </div>

        <div 
          onClick={ handleQuantity.bind(this, 'increaseQuantity') }
        >
          <AiOutlinePlus/>
        </div>
      </div>

      <div className='flex items-center my-10 gap-x-8'>
        <button 
          className='uppercase border-2 py-3 px-8 border-activeColor text-activeColor'
          onClick={ handleAddToCart }
        >
          Add to cart
        </button>
        
        <div className='cursor-pointer'>
          <MdFavoriteBorder color='#C3B8A5' fontSize={30}/>
        </div>
      </div>

      <div className='font-normal text-sm text-primaryColor'>
        <div className='my-2'>
          <p className='tags-container-flex uppercase'>
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