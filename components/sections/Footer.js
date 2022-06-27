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
      <div className='flex justify-between'>
        {
          FooterData.map(data =>{
            const { title,links } = data
            return(
              <div>
                <h3 className='text-2xl text-[#000000] capitalize'>{ title}</h3>
                <ul className='py-3'>
                  {
                    links.map(link => (
                      <li className='py-1'><a className='text-lg text-[#B9B9B9]' href='#'>{ link }</a></li>
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
      <div className='px-10'>
        <div className=''>
          <h2 className='py-2 flex justify-center'>
            <BrandLogo/>
          </h2>
          <p className='text-center font-light text-lg text-[#A8A8A8] pt-5 py-10'>Posuere sollicitudin aliquam ultrices sagittis orci <br/> a scelerisque purus.</p>
        </div>

        <div>
          <Links/>
        </div>

        <div className='mt-20 border-t-2 py-4 border-[#E4E4E4] text-[#ABABAB] flex-space-between'>
          <div>
            <p className='text-sm'>COPYRIGHT 2022 © LA-STUDIO. ALL RIGHTS RESERVED.</p>
          </div>
          <ul className='text-sm flex gap-x-10'>
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