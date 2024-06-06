import React from 'react'
import Image from 'next/image'
import { ImInstagram } from 'react-icons/im'
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { Separator } from './ui/separator'

const Footer = () => {
  return (
    <footer className='mt-36 px-16 text-slate-300'>
      <div className='grid grid-cols-3 gap-10 mb-10'>
        <div>
          <h1 className='text-3xl mb-10 text-center font-serif'>Contact Us</h1>
          <p className='text-center'>{"12\'th Von Neumann Street, Banana Island, Lagos, Nigeria"}</p>
          <p className='text-center'>+234 814 439 2332</p>
          <p className='text-center'>+234 913 368 1190</p>
        </div>
        <div className='flex gap-4 flex-col items-center'>
          <Image 
            src={'/Regals.png'}
            alt="logo"
            width={200}
            height={200}
          />
          <blockquote className='text-center'>Elegance and Royalty brings out the best in us</blockquote>
          <div className='flex gap-5 flex-row justify-center'>
            <FaInstagram color='white' size={35}/>
            <FaFacebook color='white' size={35}/>
            <FaXTwitter color='white' size={35}/>
          </div>
        </div>
        <div className='flex flex-col gap-4 text-center'>
          <h1 className='text-3xl font-serif '>Working Hours</h1>
          <div>
            <p>Monday - Friday</p>
            <p>08:00 a.m - 12:00 p.m</p>
          </div>
          <div>
            <p>Saturday - Sunday</p>
            <p>07:00 a.m - 11:00 p.m</p>
          </div>
        </div>
      </div>
      <Separator className='bg-orange-300'/>
      <p className='text-center mt-6 mb-6'>&copy; 2024 Regals LLC. All Right Reserved</p>
    </footer>
  )
}

export default Footer