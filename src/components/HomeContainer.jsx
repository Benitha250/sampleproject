import React from 'react'
import { MdElectricBike} from 'react-icons/md'
import Cylinders from '../imgs/cylinders1.jpg'
import { Link } from 'react-router-dom'


const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      
      <div className="py-2 flex-1 flex flex-col items-start md:items-center justify-center rounded-full">
          <img src={Cylinders} className="w-460 justify-center px-16 py-1" alt="cylinders" />
      </div>

      <div className="py-2 flex-1 flex flex-col items-start md:items-center justify-center">
        <div className="flex items-center gap-2 justify-center px-16 py-1">
          <p className="text-base font-extrabold">Your gas is 
          <span className="text-green-700"> one order away!</span></p>
          <div className="w-5 h-5 rounded-full overflow-hidden">
            <MdElectricBike className="w-full h-full object-contain"/>
          </div>
        </div>
        
        <p className="text-[2rem] font-extrabold tracking-wide text-center">
          Check the <span className="text-green-700">nearest gas station </span> 
          and get <span className="text-green-700">your gas delivered</span>...
        </p>

        <Link to={"/order"} ><button type="button" className="bg-gradient-to-br from-green-600 w-full md:w-auto px-4 py-2 
        rounded-lg transition-all ease-in-out duration-100">
          Order Now
        </button></Link>
        
      </div>
    </section>
  )
}

export default HomeContainer