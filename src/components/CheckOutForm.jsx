import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { MdTitle, MdInfo, MdNumbers, MdAvTimer} from 'react-icons/md';
import { saveCheckoutDetails } from '../utils/firebaseFunctions';

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const CreateContainer = () => {

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [fields, setFields] = useState(false); //issues that needs to be displayed.
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);

  const weekdays = (date) => new Date() < date;


  {/* saving details URL */}
  const saveDetails = () => {
    try {
      if((!name || !location || !date)){
        setFields(true);
        setMsg('Required fields can not be empty 🙇');
        setAlertStatus('danger');
        setTimeout(() => {
          setFields(false);
        }, 4000);
      } else{
        const data = {
          id : `${Date.now()}`,
          name : name,
          location : location,
          date : date,
        }
        saveCheckoutDetails(data);
        setFields(true);
        setMsg('Proceed with the payment😊');
        clearData();
        setAlertStatus('success');
        setTimeout(() => {
          setFields(false);
        }, 4000);
      }

    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg('Error : Try Again 🙇');
      setAlertStatus('danger');
      setTimeout(() => {
        setFields(false);
      }, 4000);
    }
  }

  {/* clearing details URL */}

  const clearData = () => {
    setName("");
    setLocation("");
    setDate(date);
  }

//   {/* fetching details URL */}
//   const fetchData = async () => {
//     await getAllGasItems().then(data => {
//         dispatch({
//             type : actionType.SET_GAS_ITEMS,
//             gasItems : data,
//         });
//     });
// };

  return (
    <div className=" w-full flex items-center justify-center">

        
      <div className="w-[90%] md:w-[30%] border border-gray-600 rounded-lg p-4 
        flex flex-col items-center justify-center gap-6">

        <p className="text-2xl md:text-3xl font-semibold capitalize text-headingColor relative 
            before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 
            before:right-12 before:bg-gradient-to-tr from-yellow-200 to-yellow-400 transition-all ease-in-out 
            duration-100">Delivery Information
        </p>
        {
          fields && (
            <motion.p 
            initial= {{opacity: 0}}
            animate= {{opacity: 1}}
            exit= {{opacity: 0}}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === 'danger' ? 
            'bg-red-400 text-red-700' : 'bg-emerald-500 text-emerald-800'}`}>
              {msg}
            </motion.p>
          )
        }


        {/* Title */}
        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2 rounded-md">
          <MdTitle className="text-2xl text-gray-700" />
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} 
          placeholder='Names...' 
          className="w-full h-full text-lg bg-transparent outline-none border-none
          placeholder:text-gray-300 text-textColor"
          />
        </div>


        {/* Details */}
        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2 rounded-md" >
            <MdInfo className="text-gray-700 text-2xl" />
            <input type="text" required 
            value={location} onChange={(e) => setLocation(e.target.value) }
            placeholder="Location" className="w-full h-full text-lg bg-transparent 
            outline-none border-none placeholder:text-gray-300 text-textColor" />
        </div>


        {/* Details about what have been ordered */}
        <div className="w-full flex flex-col md:flex-row items-center gap-3" >

          {/* Product */}
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2 rounded-md" >
            <input type="text"
            placeholder="Product" className="w-full h-full text-lg bg-transparent 
            outline-none border-none placeholder:text-gray-300 text-textColor" />
          </div>

          {/* Quantity */}
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2 rounded-md" >
            <input type="text"
            placeholder="Quantity" className="w-full h-full text-lg bg-transparent 
            outline-none border-none placeholder:text-gray-300 text-textColor" />
          </div>

          {/* Total price */}
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2 rounded-md" >
            <MdNumbers className="text-gray-700 text-2xl" />
            <input type="text"
            placeholder="Total" className="w-full h-full text-lg bg-transparent 
            outline-none border-none placeholder:text-gray-300 text-textColor" />
          </div>

        </div>


        {/* Date picker */}
        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2 rounded-md" >
          <MdAvTimer className="text-gray-700 text-2xl" />
          <DatePicker
          className="text-red-700 text-lg" showMonthDropdown isClearable
          value={date}
          showTimeSelect
          filterDate={weekdays}
          minTime={new Date(0,0,0,7,0)}
          maxTime={new Date(0,0,0,20,0)} 
          selected={date} 
          onChange={(date) => setDate(date)}
          dateFormat="MMMM d, yyyy h:mmaa" />
        </div>

        {/* Button */}
        <div className="flex items-center w-full" >
          <button type="button" className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none 
          bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold" onClick={saveDetails} >
            Proceed to payment😊
          </button>
        </div>

      </div>
    </div>
  )
}

export default CreateContainer