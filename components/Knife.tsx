"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Mesh, Object3D } from 'three'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Knife({props}:any) {
  const { nodes, materials } = useGLTF('/knife.glb')
  const knifeRef = useRef<any>()

    useGSAP(()=> {
        gsap.to(knifeRef.current.rotation, {
          duration: 1,
          repeat: -1,
          ease: 'linear',
          x: 0,
          y: Math.PI *2,
          z: 0,
        })
        gsap.from(knifeRef.current.position,{
            duration: 1,
            x:50,
            y:25,
        })
    })

  return (
    <group {...props} ref={knifeRef} dispose={null}>
      <group position={[-0.007, 0.005, 0]} rotation={[Math.PI, -1.571, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.13}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.blade_final_knife_texture_0 as Mesh).geometry}
              material={materials.knife_texture}
              rotation={[0, 0.478, 0]}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/knife.glb')