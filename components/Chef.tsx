import React from 'react'
import Image from 'next/image'

const Chef = () => {
  return (
    <section  className='px-12 mt-10'>
      <h1 className='text-center text-6xl text-orange-500'>Our Chef</h1>
      <div className='grid grid-cols-3 order-2'>
        <div className='flex flex-col gap-4 mt-10'>
          <p className='text-4xl text-right text-slate-400'>What We Believe In </p>
          <Image
            src={'/quote-open.png'}
            alt='quote open'
            width={25}
            height={25}
            className='invert items-end justify-items-end self-end'
          />
          <p className='text-right text-slate-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Recusandae eos est optio autem, repellat nesciunt tenetur provident placeat 
            delectus ut voluptate asperiores molestias pariatur dolorem veniam, perspiciatis deleniti nam tempore.</p>
          <Image
            src={'/quote-close.png'}
            alt='quote close'
            width={25}
            height={25}
            className='invert  justify-items-end self-end'
          />
        </div>
        <Image
          src={'/chef.png'}
          alt='chef'
          width={500}
          height={200}
          className='order'
        />
        <div className='flex flex-col gap-4 mt-10'>
          <p className='text-4xl  text-slate-400'>What To expect </p>
          <Image
            src={'/quote-open.png'}
            alt='quote open'
            width={25}
            height={25}
            className='invert '
          />
          <p className='text-slate-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Recusandae eos est optio autem, repellat nesciunt tenetur provident placeat 
            delectus ut voluptate asperiores molestias pariatur dolorem veniam, perspiciatis deleniti nam tempore.</p>
          <Image
            src={'/quote-close.png'}
            alt='quote close'
            width={25}
            height={25}
            className='invert '
          />
        </div>
      </div>
    </section>
  )
}

export default Chef