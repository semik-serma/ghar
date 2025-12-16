'use client'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";

import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [date,setdate]=useState('')
  

    
    

  return (
    <div>
        <div>
            <div>
              <Image src='https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'width={40} height={40} alt='Tiger gang'></Image>
            </div>
            <div>
        
      
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      
    
            </div>
            <div>
              <Link href='/login'>Login</Link>
            </div>
            <div>
            <Link href='https://www.facebook.com/'><FaFacebook /></Link>
            <Link href='https://www.youtube.com/@digitalmediacenterphidim6022'> <FaYoutube  /></Link>
            <Link href='https://www.linkedin.com/feed/'><FaLinkedin /></Link>
            </div>
          <div>
            
          </div>
        </div>
      <div></div>
    </div>
  )
}

export default Navbar
