import { Canvas } from '@react-three/fiber';
import { ARButton, VRButton, XR } from '@react-three/xr';
import React from 'react'
import "./ProductAR.css"
import { useLocation } from 'react-router'
import { Mobile } from './Mobile';
import { Brain } from './Brain';
import { OrbitControls } from '@react-three/drei';


const ProductAR = () => {

    const location = useLocation();
  return (
    <div className='AR'>
    <ARButton />
        <Canvas>
            {/* <OrbitControls /> */}
            
            <ambientLight intensity={20}/>
            <directionalLight intensity={4} />
            <XR>

            <OrbitControls />

            {location.state.product == "Mobile Signal" && <Mobile   />}
            {location.state.product == "Brain" && <Brain   />}
            
            </XR>
        </Canvas>
    </div>
  )
}

export default ProductAR