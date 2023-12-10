import { useEffect } from "react"
import { useGLTF, Shadow, SpotLight } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
import { Box, MantineProvider, Text } from '@mantine/core';

export function HandSelect({roomData, select, ...props}: any) {
  
  const gu = useGLTF("/models/gu.glb");
  const choki = useGLTF("/models/choki.glb");
  const pa = useGLTF("/models/pa.glb");


  return (
    <>
        <mesh receiveShadow castShadow  material-envMapIntensity={0.25} >
          <primitive 
            object={gu.scene.clone()}
            position={select === "gu" ? [-6, 4, 5] : [-6, 0, 5]}
            scale={[1.3, 1.3, 1.3]}
          />
        </mesh>
        <mesh receiveShadow castShadow material-envMapIntensity={0.25} >
          <primitive 
            object={choki.scene.clone()}
            position={select === "choki" ? [0, 4, 5] : [0,0,5]}
            scale={[1.3, 1.3, 1.3]}

          />
        </mesh>
        <mesh receiveShadow castShadow  material-envMapIntensity={0.25} >
          <primitive 
            object={pa.scene.clone()}
            position={select === "pa" ? [6, 4, 5] : [6,0,5]}
            scale={[1.3, 1.3, 1.3]}
          />
        </mesh>
    </>
  )
}
