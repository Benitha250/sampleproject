import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
import NotFound from '../imgs/NotFound.svg'

const RowContainer = ({flag, data, scrollValue}) => {
    const rowContainer = useRef()

    const [items, setItems] = useState([]);

    const [{cartItems}, dispatch] = useStateValue();

    const addtocart = () => {
        dispatch({
            type : actionType.SET_CART_ITEMS,
            cartItems : items,
        });
        localStorage.setItem("cartItems", JSON.stringify(items));
    };
    
    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue])


    useEffect(() => {
        addtocart()
    }, [items])


  return (
    <div 
    ref={rowContainer}
    className={`w-full flex items-center gap-4 my-12 scroll-smooth ${
        flag ? 'overflow-x-scroll md:scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center'}`} >

            {data && data.length > 0 ? (
                data.map(item => (

                <div
                    key={item?.id} 
                    className="w-225 min-w-[200px] my-12 h-auto p-2 bg-slate-50 rounded-lg hover:drop-shadow-2xl" >
                    <div className="w-full flex items-center justify-between" >
                        <motion.img 
                        // image 
                        src={item?.imageURL} alt="" 
                        className="w-40 h-40 -mt-3 mix-blend-multiply" />
                        <motion.div 
                        whileTap={{scale: 0.75}} 
                        className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer" 
                        onClick={() => setItems([...cartItems, item])
                        }
                        >
                            <MdShoppingCart className="text-white" />
                        </motion.div>
                    </div>

                    <div className="w-full flex flex-col items-end justify-end" >
                        {/* Title */}
                        <p className="text-textColor font-semibold text-base md:text-lg" >{item?.title}</p>
                        {/* Details */}
                        <p className="mt-1 text-sm text-gray-500" >{item?.detail}</p>
                        {/* Price */}
                        <div className="flex items-center gap-8" >
                            <p className="text-lg text-headingColor font-semibolds" >
                                <span className="text-sm text-red-500" >RWF</span> {item?.price}
                            </p>
                        </div>
                </div>
                </div>

            ))
            ) : (
                <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" alt='' />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
            )}

    </div>
  )
}

export default RowContainer