import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'a0uab7sk',
  dataset: 'production',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion:'2022-06-09'
})


const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)