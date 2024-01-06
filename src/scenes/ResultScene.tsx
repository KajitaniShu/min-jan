import { modals, openModal, closeModal } from '@mantine/modals';
import { useEffect } from 'react';
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Box, rem, Text } from '@mantine/core';
import { Html,useHelper, Environment, Shadow } from '@react-three/drei'
import { GameCharacter } from "../components/GameCharacter"
import { MantineProvider, createTheme } from '@mantine/core';
import { Loading3D } from '../components/Loading3D';
import { HandSelect } from '../components/HandSelect';
import { Stage } from '../components/Stage';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import { where, collection, query } from 'firebase/firestore';
import { db } from '../config/firebase'

export function ResultScene({roomData, memberData, roomId, state}:any) {
  const [lastGameData, loading] = useCollectionDataOnce(query(collection(db, "games"), where("uid", "==", String(roomId)+"-r1")));

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
    <Stage />
    {memberData && lastGameData && Object.entries(lastGameData?.[0].player).map(([userId, userData]:any, index) => {
      return( <GameCharacter character={/*"00"+String(index+1)*/ "001"} name={memberData.find((e:any) => e.uuid === userId).name} userHand={userData.choice === null ? "null" : hand[userData.choice]} position={position[index]} win={true} key={index} />)
    })
    }
    {/* {state === "waiting" && 
      <HandSelect roomData={roomData} select={"pa"}/>
    } */}
    </>
  )
}
