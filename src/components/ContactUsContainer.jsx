import React from 'react'
import { MdLocationPin, MdPhoneAndroid, MdMail } from 'react-icons/md'
import FooterContainer from './FooterContainer'

function ContactUsContainer() {
  return (
    <section className="p-12" >
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl md:text-3xl font-semibold capitalize text-headingColor relative 
              before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 
              before:right-12 before:bg-gradient-to-tr from-yellow-200 to-yellow-400 transition-all ease-in-out 
              duration-100">Connect With Us
        </p>

        <div className="p-14 text-sm md:text-lg">
          <div className="flex gap-4" >
            <MdLocationPin className="text-sm md:text-4xl" />
            <p>Rwanda Office - Rwandex Road, Africa Union Street</p>
          </div>

          <div className="flex mt-5 gap-4" >
            <MdPhoneAndroid className="text-sm md:text-4xl" />
            <p>250 7....</p>
          </div>

          <div className="flex mt-5 gap-4">
            <MdMail className="text-sm md:text-4xl" />
            <p>info.rw@hashienergy.com</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ContactUsContainer