
import { ContactShadows, Html, OrbitControls, Stage, useGLTF } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { useState, useRef, useEffect, Suspense } from 'react';
import * as THREE from 'three';
import { useSpring } from '@react-spring/three';
import { Setup } from './Setup';
import { Icon } from '@iconify/react/dist/iconify.js';


const CameraAnimation = ({ isZoomed }) => {
  const { camera } = useThree();
  const cameraRef = useRef(camera);

  const { position, fov } = useSpring({
    position: isZoomed ? [100, 90, 150] || [200,90,150] : [160, 50, 5], 
    fov: isZoomed ? 35 : 1.3,
    config: { duration: 2000 },
  });

  useFrame(() => {
    cameraRef.current.position.lerp(new THREE.Vector3(...position.get()), 0.1);
    cameraRef.current.fov = fov.get();
    cameraRef.current.lookAt(new THREE.Vector3(1, 0.2, 5.5));
    cameraRef.current.updateProjectionMatrix();
  });

  return null;
};

const Comps = () => {
  // const { scene } = useGLTF('/setup.glb');
  const [isZoomed, setIsZoomed] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    setIsZoomed(prev => !prev);
  };

  const handleMuteClick = () => {
    setIsMuted(prev => !prev);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  }, [isMuted]);

  const date = new Date();
  const showTime = date.getHours() 
      + ':' + date.getMinutes() 
      + ":" + date.getSeconds();
  
  return (
    <div className='gg' style={{ width: "100vw", height: "100vh" }}>
      <h1 className='bg-white shadow-2xl text-black p-2 w-40 absolute z-10 left-3 top-3'>M.Danyal Khan</h1>
      <h1 className='bg-white shadow-2xl text-black p-2 w-40 absolute z-10 left-3 top-14'>Frontend Developer</h1>
      {/* <h1 className='bg-white shadow-2xl text-black p-2 w-40 absolute z-10 left-3 top-[100px]'>Click on comp obj to zoom in</h1> */}
      <div className='flex bg-white shadow-2xl text-black  w-20 absolute z-10 left-3 top-[100px]'>
      <h2 className='p-2  ' > {showTime}</h2>

      <button onClick={handleMuteClick} className='bg-white shadow-2xl text-black p-2 w-10  ml-7'>
        {isMuted ? <Icon icon="humbleicons:volume-2" width={"20px"} height={"20px"} /> : <Icon icon="humbleicons:volume-off" width={"20px"} height={"20px"} />}
      </button>
      </div>

      <audio id="lostmojo" ref={audioRef} autoplay="autoplay">
    <source src="office.mp3" type="audio/mp3"/>
</audio>
      <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [40, 30, 30], fov: 100 }}>
        <Stage environment="studio" intensity={0} preset="soft">
          <ambientLight intensity={0.2} />
          <OrbitControls />
          {/* <primitive  
            roughness={0} object={scene} onClick={handleClick} position={[0, -2, 0]}>
            <Html
              wrapperClass='pc'
              position=  {[-4.1, 9.5, -2.7]}
              distanceFactor={1.10}
              transform
              rotation={[0, Math.PI / 2, 0]} 
              rotation-x={-0.01}
            >
              <iframe src='https://webxpert.vercel.app/' />
            </Html>
          </primitive> */}
    
          
          <Setup roughness={0} onClick={handleClick} position={[0, -2, 0]}>
            {/* <Html
              wrapperClass='pc'
              position={[-4.1, 9.5, -2.7]}
              distanceFactor={1.10}
              transform
              rotation={[0, Math.PI / 2, 0]} 
              rotation-x={-0.01}
            >
           
            
              <iframe src='https://my-portfolio-vert-psi-65.vercel.app/' />
            </Html> */}
          </Setup>
        
          <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={3} far={4} />
          <pointLight position={[5, 5, 5]} intensity={0.5} />
          <pointLight position={[-5, 5, 5]} intensity={0.5} />
          <pointLight position={[0, 10, 0]} intensity={0.3} />
          <CameraAnimation isZoomed={isZoomed} />
        </Stage>
      </Canvas>
    </div>
  );
};

export default Comps;
