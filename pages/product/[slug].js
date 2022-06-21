import React from 'react';

import {  TopNav } from '../../components/index'
import { client } from '../../lib/client';
import { 
  ProductInfo,
  ProductImages,
  Description,
  AdditionalInformation,
  Reviews
} from '../../components/index'


function ProductDetails({ productData }){
  const { name, category, slug, price, details, image } = productData

  const [ active, setActive ] = React.useState('description')
  
  return(
    <section>
      <TopNav>
        <div className='w-full bg-[#F0EDE8]'>
          <div className='auto-width'>
            <p className='py-4'>{`Home /Shop / ${ name }`}</p>
          </div>
        </div>

        <div className='auto-width'>
          <div className=''>
            <div className='flex py-10 gap-x-10'>
            <ProductImages
              images={ image }
            />

            <ProductInfo
              product = { productData }
            />
            </div>
          </div>

          <div className='my-12'>
            <div className='uppercase flex items-center gap-x-12 component-change border-b-2 pb-3'>
              <p 
                className={`hover:text-primaryColor ${active ==='description' ? 'text-primaryColor' : '' }`}
                onClick={() => setActive('description')}
              >
                Description
              </p>
              <p 
                className={`hover:text-primaryColor ${active ==='additional information' ? 'text-primaryColor' : '' }`}
                onClick={() => setActive('additional information')}
              >
                Additional Information
              </p>
              <p 
                className={`hover:text-primaryColor ${active ==='reviews' ? 'text-primaryColor' : '' }`}
                onClick={() => setActive('reviews')}
              >
                Reviews (1) 
              </p>
            </div>
          </div>

          <div>
            { active === 'description' && <Description images={ image }/> }
            { active === 'additional information' && <AdditionalInformation/> }
            { active === 'reviews' && <Reviews/> }
          </div>
        </div>

      </TopNav>
    </section>
  )
}

export default ProductDetails;

export const getStaticPaths = async () => {
  const query = `*[_type== "product"]{
    slug {
      current
    }
  }`

  const products = await client.fetch(query)

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

  const productData = await client.fetch(query);

  return {
    props: {
      productData
    }
  }
}