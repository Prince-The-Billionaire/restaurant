import React from 'react'
import Image from 'next/image'

const Laurels = () => {
  return (
    <section className='px-32'>
      <div className='flex flex-col justify-center'>
        <div className='my-14 justify-center flex-row flex items-center'>
        <Image 
          src={'/laurel-left.png'}
          alt='laurel left'
          width={100}
          height={100}
          className='space-x-20'
        />
        <h1 className='text-5xl  text-amber-300'>
          Our Laurels
        </h1>
        <Image 
          src={'/laurel-right.png'}
          alt='laurel right'
          width={100}
          height={100}
          className='space-x-20'
        />
        </div>
        <div className='grid grid-cols-2'>
        <div className="grid grid-cols-2 gap-6 text-amber-300 grid-rows-2">
          <div>
            <Image 
              src='/1.png'
              alt='1'
              width={70}
              height={70}
              className='object-cover'
            />
          <p>Restaurant Customer Satisfaction</p>
          </div>
          <div>
            <Image 
              src='/1.png'
              alt='1'
              width={70}
              height={70}
              className='object-cover'
            />
          <p>Gourment and Healthy meals</p>
          </div><div >
            <Image 
              src='/2.png'
              alt='1'
              width={70}
              height={70}
              className='object-cover'
            />
          <p>Best Restaurant Chain in Banana Island</p>
          </div><div>
            <Image 
              src='/4.png'
              alt='1'
              width={70}
              height={70}
              className='object-cover'
            />
          <p>Most Eco-friendly and Efficient Business in Nigeria</p>
          </div>
        </div>
        <Image
          src={'/pasta_2.png'}
          alt='rice'
          width={500}
          height={500}
          className='max-w-xl '
        />
        </div>
      </div>
    </section>
  )
}

export default Laurels