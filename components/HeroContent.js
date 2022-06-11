import { FurnitureIcon } from './svgIcons'
import { Circle } from './index'

function HeroContent(){
  return(
    <div className="pl-60 py-10 font-medium">
      <div className="flex items-center relative">
        <h4 className="text-[88px] leading-tight text-primaryColor">We’re a furniture company <span className="text-activeColor">from the US</span></h4>
        <img src="./Images/furnitureHero.webp" alt="furniture-image"/>

        <Circle style={'z-10 position-absolute'}>
          Shop Now
        </Circle>
      </div>

      <div className="pl-28 pt-10 font-bold text-[130px] relative flex overflow-hidden">
        <div className="py-4">
          <FurnitureIcon />
        </div>
        
        <img src="./Images/24.jpg"/>
      </div>
    </div>
  )
}

export default HeroContent