import React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import {galleryItems} from '@/constants/gallery_const'
import { Button } from './ui/button'

const Gallery = () => {
  return (
    <section className='flex flex-row  mt-20 px-5'>
        <div className='flex flex-col gap-5 pl-6'>
          <h1 className='text-5xl mt-10 font-serif'>Our Gallery</h1>
          <p className='font-sans text-lg text-slate-300'>Each Course has an amazing backstory to it</p>
          <Button className='w-fit'>See more</Button>
        </div>
        <section className='w-[60vw] mx-20'>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {
              galleryItems.map((item,index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                <Image
                  src={item}
                  alt='carousel-content'
                  width={350}
                  height={400}
                  className='max-w-xl  max-h-[70vh]  object-cover'
                />
              </CarouselItem>
              ))
            }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </section>
  )
}

export default Gallery