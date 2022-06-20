const data = [
  {
    title: 'Weight',
    value: '20kg'
  },
  {
    title: 'Dimensions',
    value: '130 x 60 x 40 cm'
  },
  {
    title: 'Color',
    value: 'Natural, White'
  },
  {
    title: 'Material',
    value: 'Wood, Silk'
  }
]


function AdditionalInformation(){
  return(
    <aside>
      <div>
        {
          data.map(item => {
            return(
              <div key={ item.title } className='flex gap-x-4 pb-4 text-lg'>
                <p className='w-28 font-light text-primaryColor'>{ item.title }</p>
                <p className="text-[#9B9B9B]">{ item.value }</p>
              </div>
            )
          })
        }
      </div>
    </aside>
  )
}

export default AdditionalInformation;