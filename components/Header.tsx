"use client"
import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { Button, buttonVariants } from './ui/button'
import Link from 'next/link'
const Header = () => {
  useGSAP(()=> {
    gsap.fromTo('#header-text',{
      y:200,
      delay:2.8,
      opacity:0
    },{
      y:0,
      opacity:1,
      duration:1,
      ease:'easein'
    })
  })
  return (
    <section className='relative'>
        <video  className='h-[80vh] w-[100vw] object-fill' autoPlay muted >
            <source src='/food.mp4' />
        </video>
        <div id='header-text' className='absolute w-[32rem] top-8 pl-16 opacity-0'>
          <Image
            src={'/spoon.png'}
            alt='spoon'
            width={50}
            height={50}
            className='mb-3'
          />
          <p className='text-7xl font-serif font-semibold text-orange-400 mb-3 '>The Key To Fine Dining</p>
          <Link title='cta' href={'/'} className={buttonVariants({ variant: "default" })}>Click here</Link>
        </div>
    </section>
  )
}

export default Header