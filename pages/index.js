import Head from 'next/head'

import { client } from '../lib/client'
import { 
  HeroSection,
  PopularProducts,
  FurnitureProducts,
  Catalogue,
  DesignStyle,
  LatestNews,
  AboutUs,
  Footer
} from '../components'


/**
 * It takes an array of products and returns an object with three arrays of products, one for each
 * category
 * @param products - an array of objects
 */
function seperateProducts(products) {
  const productsByCategory = {popularProducts: [], otherProducts:[], bedroom:[]}

  products?.map(product => {
    if((product.category).includes('popularProducts') && (product.category).includes('normal')) {
      productsByCategory.popularProducts.push(product)
      productsByCategory.otherProducts.push(product)
    }else if((product.category).includes('popularProducts')){
      productsByCategory.popularProducts.push(product)
    }else if((product.category).includes('normal')){
      productsByCategory.otherProducts.push(product)
    }else if((product.category).includes('bedroom')){
      productsByCategory.bedroom.push(product)
    }
  })
  return productsByCategory
}

export default function Home({ products }) {
  const { popularProducts, otherProducts, bedroom } = seperateProducts(products)
  return (
    <article className=''>
      <HeroSection/>
      <PopularProducts data={ popularProducts }/>
      {/* <DesignStyle/> */}
      <FurnitureProducts data={ otherProducts }/>
      <Catalogue data={ bedroom }/>
      <AboutUs/>
      <LatestNews/>
      <Footer/>
    </article>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query)

  return { 
    props:{
      products
    }
  }
}