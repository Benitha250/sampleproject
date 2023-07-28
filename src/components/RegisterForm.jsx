import { useState } from 'react'; 
import { Link } from 'react-router-dom';

export default function Form() {
 
    // States for registration
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');


    function validateForm(){
        if (name.length === 0) {
            alert('Names can not be empty.')
            return
        }
        if (phone.length !== 10) {
            alert('phone number must be 10 digits.')
            return
        }
        if (password.length < 4) {
            alert('Password must have more than 4 characters.')
            return
        }
        if (confirmpassword !== password){
            alert('Passwords must be the same.')
            return
        }

        alert('Successfully registered!! ')
    }
 

 
    return (
        <div className=" w-full flex items-center justify-center">

        
            <div className="w-[90%] md:w-[30%] border border-gray-600 rounded-lg p-4 
                flex flex-col items-center justify-center gap-6">

                <p className="text-2xl md:text-3xl font-semibold capitalize text-headingColor relative 
                    before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 
                    before:right-12 before:bg-gradient-to-tr from-yellow-200 to-yellow-400 transition-all ease-in-out 
                    duration-100">Sign Up
                </p>


                {/* Name */}
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2 rounded-md">
                    <input type="text" required onChange={(e) => setName(e.target.value)} 
                    placeholder='Names...' 
                    className="w-full h-full text-lg bg-transparent outline-none border-none
                    placeholder:text-gray-300 text-textColor"
                    />
                </div>


                {/* Phone */}
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2 rounded-md" >
                    <input type="number" required pattern="[0-9]*"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number" className="w-full h-full text-lg bg-transparent 
                    outline-none border-none placeholder:text-gray-300 text-textColor" />
                </div>

                {/* Password */}
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2 rounded-md" >
                    <input type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" className="w-full h-full text-lg bg-transparent 
                    outline-none border-none placeholder:text-gray-300 text-textColor" />
                </div>

                {/* Confirm Password */}
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2 rounded-md" >
                    <input type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm password" className="w-full h-full text-lg bg-transparent 
                    outline-none border-none placeholder:text-gray-300 text-textColor" />
                </div>

                {/* Button */}
                <div className="flex items-center w-full" >
                    <button type="submit" className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none 
                    bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold" onClick={() => {validateForm()}} >
                    Submit
                    </button>
                </div>

                <p>
                Already have an account? <Link to={"/logInForm"} className="text-red-700 underline" >SIGN IN</Link>
            </p>

            </div>

        </div>
    );
}