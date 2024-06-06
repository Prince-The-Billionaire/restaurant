import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import Image from 'next/image'

const FindUs = () => {
  return (
    <section className='px-32'>
      <div className='flex flex-row justify-around mt-36 gap-10'>
        <div className='flex flex-col gap-8'>
          <h1 className='text-4xl font-serif'>Find Us</h1>
          <p >{"12\'th Von Neumann Street, Banana Island, Lagos, Nigeria"}</p>
          <h2 className='text-2xl font-serif'>Opening Hours</h2>
          <div>
            <p>Mon - Fri  08:00am - 12:00pm</p>
            <p>Sat - Sun 07:00am - 12:00pm</p>
          </div>
          <Button className='w-fit'>Book Table</Button>
        </div>
        <Image
          src="/romantic.png"
          width={500}
          height={500}
          alt='dinner'
          className='col-span-2'
        />
      </div>
      <div className='mt-20 flex flex-col items-center gap-4 justify-center'>
        <h1 className='text-3xl text-center font-serif' >Subscribe To Our Newsletter</h1>
        <p className='text-center text-xl'>{"We\'d love you to see and hear other people stories"}</p>
        <div className="flex w-full max-w-xl items-center space-x-2">
        <Input type="email"  className="border-orange-200" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
    </div>
      </div>
    </section>
  )
}

export default FindUs