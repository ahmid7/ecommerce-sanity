import Image from 'next/image';

import { SubSection } from '../index'

function LatestNews(){
  const newsData = [
    {
      Date: 'May 1 2022',
      Title: '10 ideas for furnishing a family room',
      image: '/images/news-1.jpg',
      details:'Diam donec adipiscing tristique risus nec feugiat in fermentum cursus metus aliquam eleifend mi in nulla posuere sollicitudin.'
    },
    {
      Date: 'May 1 2022',
      Title: 'Fix up your dining room for the holidays',
      image: '/images/news-2.webp',
      details:'Cras fermentum odio eu feugiat pretium luctus venenatis lectus magna fringilla urna porttitor rhoncus risus nullam eget felis eget'
    }
  ]
  return(
    <section>
      <SubSection title='Update the latest news' carousel={true}>
        <div className='flex flex-nowrap gap-x-10'>
          {
            newsData.map(news => {
              const { Date, Title, image, details } = news
              return(
                <div className='text-center'>
                  <div className='relative w-full h-[452px]'>
                    <Image
                      src={ image }
                      alt={Title}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                  <div className='py-4'>
                    <p className='text-sm py-2'>{ Date }</p>
                    <h3 className='text-2xll text-primaryColor font-medium'>{Title}</h3>
                    <p className='text-lg text-[#B8B8B8] py-4'>{ details }</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </SubSection>
    </section>
  )
}

export default LatestNews;