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
    <section className="py-10 bg-[#898990] bg-designSystem bg-no-repeat bg-center bg-cover">
      <SubSection 
        title='Choose a design style' 
        subTitle='ipsum nunc aliquet bibendum enim facillisis gravida neque convallis a aliquet risus feugiat in ante'
      >
        <div className='grid grid-cols-3 gap-x-5'>
          {
            data.map(item => {
              return(
                <div className='h-[599px]' key={item.name}>
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