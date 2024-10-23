import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Brain(props) {
  const { nodes, materials } = useGLTF('models/human_brain.glb')
  return (
    <group {...props} dispose={null}>
    <group position-z={-2}>
      <group rotation={[-Math.PI / 2, 0, 1]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
             material={materials.BRAIN_STEM_1002}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.cerebellum_1003}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.BRAIN_LOW_1001}
          />
        </group>
      </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/human_brain.glb')