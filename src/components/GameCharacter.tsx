import { useGLTF, Shadow } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'

export function GameCharacter({character, userHand, win, ...props}: any) {
  const model = useGLTF("./models/characters/" + character + ".glb");
  const hand = useGLTF("./models/" + userHand + ".glb");
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
        {model && model.scene && 
        <mesh receiveShadow castShadow  material-envMapIntensity={0.25} >
          <primitive 
            object={model.scene.clone()}
            position={[0,0,0]}
            scale={[1, 1, 1]} 
          />
        </mesh>
        }
        <mesh receiveShadow castShadow  material-envMapIntensity={0.25} rotation={[0, 0, 0.1]}>
          <primitive 
            object={hand.scene.clone()}
            position={[-1.7,0.5,0]}
            scale={[1, 1, 1]} 
          />
        </mesh>
      </animated.group>
      <animated.group scale={win ? shaderScale : 3} >
        <Shadow fog  opacity={0.3} />
      </animated.group>
      </group>
    </>
  )
}
