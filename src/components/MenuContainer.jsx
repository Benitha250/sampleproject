import React, { useState } from 'react'
import {IoImage} from 'react-icons/io5'
import { categories } from '../utils/data';
import { motion } from 'framer-motion';
import RowContainer from './RowContainer';
import FooterContainer from './FooterContainer';
import { useStateValue } from '../context/StateProvider';

const MenuContainer = () => {

    const [filter, setFilter] = useState("cylinders");

    const [{gasItems}, dispatch] = useStateValue()


  return (
    <section className="w-full my-6" id="menu" >
        <div className="w-full flex flex-col items-center justify-center" >
            <p className="text-2xl md:text-3xl font-semibold capitalize text-headingColor relative 
            before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 
            before:right-12 before:bg-gradient-to-tr from-yellow-200 to-yellow-400 transition-all ease-in-out 
            duration-100">Available Gas appliances
            </p>

            <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
                {categories && 
                categories.map((category) => (
                    <motion.div whileTap={{scale : 0.75}}
                    key={category.id} 
                    className={`group ${filter === category.urlParamName ? 'bg-red-500' : 'bg-slate-50'} 
                    w-24 min-w-[94px] h-28 cursor-pointer rounded-lg flex flex-col 
                    gap-3 items-center justify-center hover:bg-red-500`} 
                    onClick={() => setFilter(category.urlParamName)}
                    >   
                       
                       <div className={`w-10 h-10 rounded-full ${filter === category.urlParamName ? 'bg-slate-50' : 'bg-red-500'} 
                       group-hover:bg-slate-50 flex items-center justify-center`} >
                           <IoImage 
                               className={`${filter === category.urlParamName ? 'text-textColor' : 'text-slate-50'} 
                               group-hover:text-textColor text-lg`}
                           />
                       </div>
                       <p className="group-hover:text-white text-sm" >
                        {category.name}
                       </p>
                   </motion.div>
                ))}
            </div>

            <div className="w-full" >
                <RowContainer flag={false} data={gasItems?.filter((n) => n.category == filter)} />
            </div>

        </div>

        <FooterContainer/>
    </section>

  )
}

export default MenuContainer