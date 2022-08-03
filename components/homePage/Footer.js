import { BrandLogo } from '../svgIcons'

function Links(){
  const FooterData =[
    {
      title:"Living room",
      links:[
        'sofa',
        'chairs',
        'coffe table',
        'floor lamp'
      ]
    },
    {
      title:"kitchen",
      links:[
        'ceiling lights',
        'benches',
        'stools',
        'storage'
      ]
    },
    {
      title:"Bed rooms",
      links:[
        'headboards',
        'nightstands',
        'beds',
        'Chests'
      ]
    },
    {
      title:"office room",
      links:[
        'desks',
        'bookshelves',
        'fireplaces',
        'office chairs'
      ]
    },
    {
      title:"home decor",
      links:[
        'Mirrors',
        'Pots Plant',
        'picture frames',
        'carpets'
      ]
    }
  ]
  return(
    <div>
      <div className='flex flex-col gap-y-5 sm:gap-y-0 text-center sm:text-left sm:flex-row justify-between'>
        {
          FooterData.map(data =>{
            const { title,links } = data
            return(
              <div className=''>
                <h3 className='text-xl sm:text-lg md:text-xl xl:text-2xl text-[#000000] capitalize'>{ title}</h3>
                <ul className='py-1 md:py-2 xl:py-3'>
                  {
                    links.map(link => (
                      <li className='py-1'><a className='text-lg sm:text-base xl:text-lg text-[#B9B9B9]' href='#'>{ link }</a></li>
                    ))
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

function Footer(){
  return(
    <footer className='auto-width'>
      <div className='lg:px-10'>
        <div className=''>
          <h2 className='py-2 flex justify-center'>
            <BrandLogo/>
          </h2>
          <p className='text-center font-light sm:text-lg text-[#A8A8A8] py-5 sm:pt-5 sm:py-5 md:py-10'>Posuere sollicitudin aliquam ultrices sagittis orci <br/> a scelerisque purus.</p>
        </div>

        <div>
          <Links/>
        </div>

        <div className='mt-5 md:mt-10 xl:mt-20 border-t-2 py-4 border-[#E4E4E4] text-[#ABABAB] justify-between flex flex-col md:flex-row sm:flex-space-between'>
          <div className='order-2 sm:order-1 text-center'>
            <p className='text-sm pt-3 sm:pt-0'>COPYRIGHT 2022 © LA-STUDIO. ALL RIGHTS RESERVED.</p>
          </div>
          <ul className='text-base sm:text-sm order-1 sm:order-2 flex justify-between md:gap-x-10'>
            <li className='list-none '>Terms & Condition</li>
            <li className='list-none'>Privacy Policy</li>
            <li className='list-none'>Help Center</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer