import { SubSection } from '../index'

function DesignStyle(){
  const data = [
    {
      name: 'Minimalistic',
      image:'./images/minimalist.jpg',
    },
    {
      name: 'Modern',
      image: './images/modern.jpg',
    },
    {
      name: 'Contemporary',
      image: './images/contemporary.jpg',
    }
  ]

  return(
    <section className="py-2 md:py-8 lg:py-10 bg-[#898990] bg-designSystem bg-no-repeat bg-center bg-cover">
      <SubSection 
        title='Choose a design style' 
        subTitle='ipsum nunc aliquet bibendum enim facillisis gravida neque convallis a aliquet risus feugiat in ante'
      >
        <div className='grid sm:grid-cols-3 gap-x-1 lg:gap-x-3 xl:gap-x-5'>
          {
            data.map(item => {
              return(
                <div className='h-[450px] sm:h-[320px] lg:h-[400px] xl:h-[529px] 2xl:h-[599px]' key={item.name}>
                  <img 
                    src={ item.image } 
                    alt={item.name}
                    className='w-full h-full'
                  />
                </div>
              )
            })
          }
        </div>
      </SubSection>
    </section>
  )
}

export default DesignStyle;