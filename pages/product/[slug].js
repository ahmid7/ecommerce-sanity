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
  const { name, image } = productData

  const [ active, setActive ] = React.useState('description')

  const [isComponentClick, setComponnetClick] = React.useState({
    description: true,
    additionalInformation: false,
    reviews: false
  })

  const handleisComponentActive = (component) => {
    setComponnetClick({
      ...isComponentClick,
      [component]: !isComponentClick[component]
    })
  }

  const handleClick = (component) => {
    setActive(component)
    handleisComponentActive(component)
  }
  
  return(
    <section>
      <TopNav>
        <div className='w-full bg-[#F0EDE8]'>
          <div className='auto-width'>
            <p className='py-4 text-sm xl:text-base'>{`Home /Shop / ${ name }`}</p>
          </div>
        </div>

        <div className='auto-width'>
          <div className=''>
            <div className='flex flex-col sm:flex-row py-4 lg:py-7 xl:py-10 gap-x-4 lg:gap-x-6 xl:gap-x-10'>
              <ProductImages
                images={ image }
              />

              <ProductInfo
                product = { productData }
              />
            </div>
          </div>

          <div className='my-4 xl:my-12'>
            <div className='uppercase flex flex-col gap-y-6 sm:gap-y-0 sm:flex-row sm:items-center gap-x-6 lg:gap-x-12 component-change sm:border-b-2 pb-3'>
              <div className=''>
                <p 
                  className={`product-info-comp  ${active ==='description' ? 'text-primaryColor' : '' }`}
                  onClick={() =>  handleClick('description')}
                >
                  Description
                </p>

                <div className='block sm:hidden'>
                  {
                    isComponentClick.description  && <Description images={ image } />
                  }
                </div>
              
              </div>

              <div className=''>
                <p 
                  className={`product-info-comp ${active ==='additionalInformation' ? 'text-primaryColor' : '' }`}
                  onClick={() => handleClick('additionalInformation')}
                >
                  Additional Information
                </p>

                <div className='block sm:hidden'>
                  {
                    isComponentClick.additionalInformation  && <AdditionalInformation/>
                  }
                </div>
              </div>

              <div className=''>
                <p 
                  className={`product-info-comp ${active ==='reviews' ? 'text-primaryColor' : '' }`}
                  onClick={() => handleClick('reviews')}
                >
                  Reviews (1) 
                </p>

                <div className='block sm:hidden'>
                  {
                    isComponentClick.reviews  && <Reviews/>
                  }
                </div>
              </div>
            </div>
          </div>

          <div className='hidden sm:block'>
            { active === 'description' && <Description images={ image }/> }
            { active === 'additionalInformation' && <AdditionalInformation/> }
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