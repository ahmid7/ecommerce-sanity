import React from 'react';
import { TopNav } from '../../components/index'
import { client, urlFor } from '../../lib/client';
import { 
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus
} from 'react-icons/ai'
import { ProductInfo } from '../../components/index'


function ProductDetails({ productData }){
  const { name, category, slug, price, details, image } = productData
  const [imageIndex, setImageIndex] = React.useState(0)

  function updateImageIndex(index){
    setImageIndex(index)
  }
  return(
    <section>
      <TopNav>
        <div className='w-full bg-[#F0EDE8]'>
          <div className='container mx-auto'>
            <p className='py-4'>{`Home /Shop / ${ name }`}</p>
          </div>
        </div>

        <div className='container mx-auto'>
          <div className='flex py-10 gap-x-10'>
            <div className='flex gap-x-10'>
              <ul className=''>
                {
                  image.map((item, i) =>{
                    return(
                      <li className='w-[95px] h-[110px] mb-5'>
                        <img src={urlFor(item)} onClick={() =>updateImageIndex(i)} className="w-full h-full"/>
                      </li>
                    )
                  })
                }
              </ul>

              <div className='w-[700px] h-[790px]'>
                <img 
                  src={urlFor(image && image[imageIndex])}
                  className='w-full h-full'
                />
              </div>
            </div>

           <ProductInfo
            name={name}
            price={price}
            details={details}
           />
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