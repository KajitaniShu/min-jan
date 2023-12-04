import { Suspense } from 'react'
import { useRef } from 'react';
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Box, rem, Text } from '@mantine/core';
import { Html,useHelper, OrbitControls, Environment, Shadow } from '@react-three/drei'
import { GameCharacter } from "../components/GameCharacter"
import { MantineProvider, createTheme } from '@mantine/core';

export function GameScene({lastGameData}:any) {
  const position=[
    [3, 0, 1],
    [-3, 0, 6],
    [-4, 0, -3],
    [5, 0, -4],
    [-2, 0, -6]
  ]
  const hand = ["gu", "choki", "pa"]
  return (
    <>
      {lastGameData && lastGameData[0].hand.map((data: any, index: any) => {return (
        <GameCharacter character={"002"} userHand={hand[data]} position={position[index]} win={false} key={index} />
      )})}
    </>
  )
}
