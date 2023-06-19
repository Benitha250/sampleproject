import React, { useEffect, useState } from 'react'
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';
import MenuContainer from './MenuContainer';
import CartContainer from './CartContainer';
import FooterContainer from './FooterContainer';
import ContactUsContainer from './ContactUsContainer';


const MainContainer = () => {
  const [{gasItems, cartShow}, dispatch] = useStateValue();
  const [scrollValue, setscrollValue] = useState(0)
  
  useEffect(() => {}, [scrollValue, cartShow])

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer/>

      <section className="w-full my-6" >
        <div className="w-full flex items-center justify-between" >
          <p className="text-2xl md:text-3xl font-semibold capitalize text-headingColor relative 
          before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 
          before:left-5 before:bg-gradient-to-tr from-yellow-200 to-yellow-400 transition-all ease-in-out 
          duration-100">Available Gas cylinders
          </p>

          {/* <div className="hidden md:flex gap-3 items-center" >
            <motion.div whileTap={{scale: 0.75}} className="w-8 h-8 rounded-lg bg-yellow-200 hover:bg-green-500 
            cursor-pointer transition-allz flex items-center justify-center" 
             onClick={() => setscrollValue(-200)}>
              <MdChevronLeft className="text-lg text-white" />
             </motion.div>

            <motion.div whileTap={{scale: 0.75}} className="w-8 h-8 rounded-lg bg-yellow-200 hover:bg-green-500 
            cursor-pointer transition-allz flex items-center justify-center" 
             onClick={() => setscrollValue(200)}>
              <MdChevronRight className="text-lg text-white" />
             </motion.div>
          </div> */}
        </div>
        <RowContainer 
        scrollValue = {scrollValue}
        flag={true}
        data = {gasItems ?.filter((n) => n.category === 'cylinders')} />
      </section>

      <MenuContainer />

      {cartShow && (
        <CartContainer />
      )}

      <ContactUsContainer />

      <FooterContainer />

    </div>
  )
}

export default MainContainer;