import React from 'react'
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from 'react-icons/io5'

function FooterContainer() {
  return (
    <section className="fixed left-0 bottom-0 right-0 w-screen p-6 bg-gradient-to-t from-yellow-300" >
      
      <p className="text-center -mb-8" >Copyright © 2023 | Hashi Energy.</p>
      <div className="flex gap-2 justify-end" >
      <IoLogoInstagram/>
      <IoLogoFacebook/>
      <IoLogoTwitter/>
      </div>

    </section>
  )
}

export default FooterContainer