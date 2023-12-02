import { Suspense } from 'react'
import { useRef } from 'react';
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Box, rem, Text } from '@mantine/core';
import { Html,useHelper, OrbitControls, Environment, Shadow } from '@react-three/drei'
import { GameCharacter } from "../components/GameCharacter"
import { MantineProvider, createTheme } from '@mantine/core';

export function GameScene() {

  return (
    <>
      <GameCharacter character={"002"} userHand={"gu"} position={[3, 0, 1]} win={true}/>
      <GameCharacter character={"002"} userHand={"choki"} position={[-3, 0, 6]} win={false}/>
      <GameCharacter character={"002"} userHand={"gu"} position={[-10, 0, -3]} win={false}/>
      <GameCharacter character={"002"} userHand={"pa"} position={[7, 0, -4]} win={false}/>
      <GameCharacter character={"002"} userHand={"choki"} position={[-2, 0, -6]} win={true}/>
    </>
  )
}
