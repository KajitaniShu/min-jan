import { useGLTF } from '@react-three/drei'

export function Stage() {
  const model = useGLTF("/models/stage.glb");
  return (
    <mesh>
      <primitive 
        object={model.scene.clone()}
        scale={[4, 4, 4]} 
        position={[0, 0.5, 0]}
        rotation-y={-Math.PI/6}
      />
    </mesh>
  )
}
