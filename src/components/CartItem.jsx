import React, { useEffect, useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
let items = [];

const CartItem = ({item, setflag, flag}) => {

    const [{ cartItems }, dispatch] = useStateValue();
    const [qty, setqty] = useState(item.qty);


    const cartDispatch = () => {
        localStorage.setItem("cartItems", JSON.stringify(items));
        dispatch({
            type: actionType.SET_CART_ITEMS,
            cartItems: items,
        });
    };

    const updateQty = (action, id) => {
        if(action === "add") {
            setqty(qty + 1);
            cartItems.map((item) => {
                if (item.id === id){
                    item.qty += 1;
                    setflag(flag + 1);
                }
            });
            cartDispatch();
        } else{
            if(qty === 1){
                items = cartItems.filter((item) => item.id !== id);
                setflag(flag + 1);
                cartDispatch();
            }else{
                setqty(qty - 1);
                cartItems.map((item) => {
                    if (item.id === id){
                        item.qty -= 1;
                        setflag(flag + 1);
                    }
                });
                cartDispatch();
            }
        }
    }

    useEffect(() => {
        items = cartItems;
    }, [qty, items]);


  return (
    <div   className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2" >
            <img src={item?.imageURL}
            className="w-20 h-20 max-w-[60px] rounded-full object-contain" alt="" />

            <div className="flex flex-col gap-2" >
                <p className="text-base text-gray-50" >{item?.detail}</p>
                <p className="text-sm block text-gray-300 font-semibold" >RWF {parseFloat(item?.price) *qty}</p>
            </div>

              {/* button section */}
            
            <div className="group flex items-center gap-2 ml-auto cursor-pointer" >
                <motion.div whileTap={{scale : 0.75}} onClick={() => updateQty("remove", item?.id)} >
                  <BiMinus className=" text-gray-50" />
                </motion.div>
                  <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center" >{qty}</p>
                <motion.div whileTap={{scale : 0.75}} onClick={() => updateQty("add", item?.id)} >
                  <BiPlus className=" text-gray-50" />
                </motion.div>
            </div>
    </div>
  )
}

export default CartItem