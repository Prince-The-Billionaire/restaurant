import { Html } from '@react-three/drei'
import React from 'react'
import { ClipLoader } from 'react-spinners'


const Loader = () => {
  return (
    <Html>
        <ClipLoader
            color={'orange'}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </Html>
  )
}

export default Loader