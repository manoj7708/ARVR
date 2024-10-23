import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Mobile(props) {
  const { nodes, materials } = useGLTF('models/Mobile_Phone.glb');
  const signalRef = useRef();

  useFrame((state,delta) => {
    signalRef.current.position.x += 1
    if(signalRef.current.position.x > 100){
      signalRef.current.position.x =1
    }
  })
  return (
    <group {...props} dispose={null}>
    
    <group scale={0.2} position-z={-1} position-y={-1} position-x={1}>
      <group position={[-15.666, -3.242, -6.517]} rotation={[-Math.PI / 2, 0, 0]} scale={0.288}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[8.937, 1.201, 0]}>
            <group position={[8.828, 12.306, 25.805]} scale={0.359}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface16_lambert1_0_1.geometry}
                material={materials.lambert1}
              />
              <mesh ref={signalRef} rotation-x={-Math.PI/3} position-y={10}>
                <planeGeometry args={[1,9]}  />
                <meshStandardMaterial color="red"/>
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface16_lambert1_0_2.geometry}
                material={materials.steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface16_lambert1_0_3.geometry}
                material={materials.material}
              />
            </group>
          </group>
        </group>
      </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/Mobile_Phone.glb')
