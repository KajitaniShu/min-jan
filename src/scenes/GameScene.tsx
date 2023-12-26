import { modals, openModal, closeModal } from '@mantine/modals';
import { useRef } from 'react';
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Box, rem, Text } from '@mantine/core';
import { Html,useHelper, OrbitControls, Environment, Shadow } from '@react-three/drei'
import { GameCharacter } from "../components/GameCharacter"
import { MantineProvider, createTheme } from '@mantine/core';
import { Loading3D } from '../components/Loading3D';
import { HandSelect } from '../components/HandSelect';

export function GameScene({roomData, lastGameData, memberData, state}:any) {
  const position=[
    [3, 0, 1],
    [-3, 0, 6],
    [-8, 0, 0],
    [5, 0, -4],
    [-2, 0, -6],
    [-8, 0, 10],
    [5, 0, 8],
    [10, 0, 3],
  ]
  const hand = ["gu", "choki", "pa"]


  return (
    <>
    
    <Html center  distanceFactor={50} transform sprite occlude position={[0, 15, 5]}>
      <MantineProvider>
        <Text c="white" ta="center" fw="bold">ひいらぎの勝ち</Text>
      </MantineProvider>
    </Html>
    {state === "result" && memberData && lastGameData && Object.entries(lastGameData?.[0].users).map(([userId, userData]:any, index) => {
      return( <GameCharacter character={/*"00"+String(index+1)*/ "001"} name={memberData.find((e:any) => e.uuid === userId).name} userHand={userData.choice === null ? "null" : hand[userData.choice]} position={position[index]} win={true} key={index} />)
    })
    }
    {/* {state === "waiting" && 
      <HandSelect roomData={roomData} select={"pa"}/>
    } */}
    </>
  )
}
