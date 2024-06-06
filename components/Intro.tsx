import React from 'react'

const Intro = () => {
  return (
    <div className='mt-24'>
      <video className='w-screen object-fill h-[85vh]' autoPlay muted loop >
        <source src='/intro.mp4'/>
      </video>
    </div>
  )
}

export default Intro