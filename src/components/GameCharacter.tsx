import { useMemo } from "react"
import { useGLTF, Shadow, Html,  } from '@react-three/drei'
import { useLoader} from "@react-three/fiber"
import { useSpring, animated } from '@react-spring/three'
import { Box, MantineProvider, Text } from '@mantine/core';
import * as THREE from 'three'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

export function GameCharacter({character, userHand, win, name, ...props}: any) {
  
  const hand = useGLTF("/models/" + userHand + ".glb");

  const model = useLoader(GLTFLoader, "/models/characters/" + character + ".glb");

  model.scene.children.forEach((mesh, i) => {
      mesh.castShadow = true;
  })
  
  model.scene.castShadow = true;

  const { positionY, shaderScale } = useSpring({
    positionY: 0.5,
    shaderScale: 2.6,
    config: {
      mass: 0.8,
      friction: 0,
      tension: 200,
    },
    from: { positionY: 0.1, shaderScale: 3 },
    loop: { reverse: true }
  })

  return (
    <>
      <group {...props}>
      <animated.group position-y={win ? positionY : 0}>
        <Html distanceFactor={14} transform sprite occlude position={[0, 12, 0]}>
          <MantineProvider>
            <Text c="white" fw="bold">{name}</Text>
          </MantineProvider>
        </Html>
        {model && model.scene && 
        <mesh receiveShadow castShadow  material-envMapIntensity={0.25} >
          <primitive 
            object={model.scene.clone()}
            position={[0,6.3,0]}
            scale={[1, 1, 1]} 
          />
        </mesh>
        }
        <mesh receiveShadow castShadow  material-envMapIntensity={0.25} rotation={[0, 0, 0.1]}>
          <primitive 
            object={hand.scene.clone()}
            position={[-1.7,6.5,0]}
            scale={[1, 1, 1]} 
          />
        </mesh>
      </animated.group>
      <animated.group scale={3} >
        <Shadow fog position-y={2.2} opacity={0.4} />
      </animated.group>
      </group>
    </>
  )
}
