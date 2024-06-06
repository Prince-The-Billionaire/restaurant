"use client"
import React from 'react'
import Image from 'next/image'
import { Separator } from './ui/separator'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const SpecialMenu = () => {
  useGSAP(()=>{
    gsap.fromTo('#menu-items',{
      y:200,
      delay:3,
      opacity:0,
    },
    {
      y:0,
      opacity:1,
      stagger:0.5,
      duration:1
    })
    gsap.fromTo('#image',{
      y:200,
      delay:3,
      opacity:0,
    },
    {
      y:0,
      opacity:1,
      stagger:0.5,
      duration:1
    })
    gsap.fromTo('#header-text',{
      y:200,
      delay:3,
      opacity:0,
    },
    {
      y:0,
      opacity:1,
      stagger:0.5,
      duration:1
    })
  })
  return (
    <section>
        <h1 className='text-6xl text-center mb-4 '>{"Today\'s Special"}</h1>
        <div className='grid grid-cols-3'>
            <div className='px-5'>
                 <h1 className='text-4xl text-center mb-4 '>Main Course</h1>
                 <div id='menu-items' className='flex flex-col gap-4'>
                 {Array(9).fill(
                 <div className='grid gap-4 grid-cols-3 align-middle'>
                    <p>{"l\'exquiste hamburguersa"}</p>
                    <Separator className='mt-3' orientation='horizontal'/>
                    <p> $20</p>
                 </div>
                )}
                 </div>
            </div>
            <img
              src='/burger.jpg'
              className='object-cover col-span-2  max-w-[100%]'
              id='image'
            />
        </div>
    </section>
  )
}

export default SpecialMenu