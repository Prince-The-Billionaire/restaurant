"use client"
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Loader from '@/components/Loader'
import { Environment } from '@react-three/drei'
import { Text } from '@react-three/drei'
import Knife from '@/components/Knife'
const Scene = () => {
  return (
    <section className='h-screen'>
        <Canvas >
            <Suspense fallback={<Loader/>}>
                <directionalLight intensity={3} position={[0,3,2]}/>
                <ambientLight/>
                <Knife/>
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Scene