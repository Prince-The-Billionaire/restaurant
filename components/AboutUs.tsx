import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import Scene from './Scene'

const AboutUs = () => {
  return (
    <section className='relative grid grid-cols-3'>
      <Image
        src="/R.png"
        alt='R'
        width={500}
        height={500}
        className='absolute z-5 left-[33%] opacity-30'
      />
      <div className='pt-32 text-right ml-36 relative gap-5 z-20 w-96 items-end justify-center flex flex-col '>
        <h1 className='text-5xl font-bold text-slate-400'>About Us</h1>
        <p className='text-xl text-slate-400'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
          repudiandae quo, quibusdam quaerat quia, quas, quos voluptatibus
          voluptates.
        </p>
        <Link href={'/'} className={buttonVariants({ variant: "default" })}>Explore more</Link>
      </div>
      <Scene/>
      <div className='pt-32 ml-1 te relative gap-5 z-20 w-96 items-start justify-center flex flex-col '>
        <h1 className='text-5xl font-bold text-slate-400'>About Us</h1>
        <p className='text-xl text-slate-400'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
          repudiandae quo, quibusdam quaerat quia, quas, quos voluptatibus
          voluptates.
        </p>
        <Link href={'/'} className={buttonVariants({ variant: "default" })}>Explore more</Link>
      </div>
    </section>
  )
}

export default AboutUs