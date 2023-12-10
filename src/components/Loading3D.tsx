import React, { useEffect, useRef } from 'react'
import { Stage, Box } from '@react-three/drei'
import { useSpring, animated, config } from '@react-spring/three'

export function Loading3D({...props}: any) {
  const [spring, api] = useSpring(() => ({ 'rotation-y': 0, config: { friction: 600, mass: 1, tension: 5000 } }), [])
  
  useEffect(() => {
    let timer: any;
    let isMove: boolean = false;
    const move = () => {
      api.start({ 'rotation-y': isMove ? 3 : 0 });
      isMove = !isMove;
      timer = setTimeout(move, 1000);
    }
    move();
    return () => clearTimeout(timer)
  }, [])


  return (
      <group {...props}>
        <animated.group  {...spring} >
          <mesh >
          <Box args={[2, 2, 2]} material-color="red"/> 
          </mesh>
        </animated.group>
        
      </group>
  )
}
