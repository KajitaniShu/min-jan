import { useEffect, useState } from 'react'
import { AppShell, Box, rem, ScrollArea, Text, Modal, Center, Group, px } from '@mantine/core';
import { Canvas } from '@react-three/fiber'
import { HeadGame } from "./HeadGame"
import { LobbyFooterButton } from "../components/LobbyFooterButton"
import { GameScene } from "../scenes/GameScene"
import { GameFooterButton } from "../components/GameFooterButton"
import { PCSelect } from './PCSelect';
import "../index.css"
import { useDisclosure } from '@mantine/hooks';
import { OrbitControls, Environment, Grid, Sparkles, SpotLight, Stage, PerspectiveCamera } from '@react-three/drei'
import { where, collection, query } from 'firebase/firestore';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import { db, auth } from '../config/firebase'
import { useViewportSize } from '@mantine/hooks';


export function Game({roomData, userData, roomId}: any) {
  const [opened, { open, close }] = useDisclosure(false);
  const [memberData] = useCollectionDataOnce(query(collection(db, "users"),where('uuid', 'in', roomData[0].members)));
  const [lastGameData, loading] = useCollectionDataOnce(query(collection(db, "games"), where("uid", "==", String(roomId)+"-r1")));
  const [state, setState] = useState<String>("loading");
  const { height, width } = useViewportSize();
  
  useEffect(()=>{
    let flag = false;
    if(roomData){
    Object.entries(roomData?.[0].player).map((e:any) => {
      if(!e[1]) flag = true;
    })}
    if(flag) setState("waiting");
    else{
      setState("result");
    }
  },[roomData]);
  
  return (
    <>
    <AppShell
      footer={{height: "auto", collapsed: true}}
      withBorder={false}
    >
      <AppShell.Header p="md" style={{backgroundColor: "transparent"}}>
        <HeadGame memberData={memberData} userData={userData} type={roomData?.[0].type}/>
        </AppShell.Header>
        
      <AppShell.Main>
        <Center h="100vh" w="100%">
          {/* <PCSelect /> */}
        </Center>
      </AppShell.Main>
      <AppShell.Footer bg="transparent" p="xs" pb="lg" hiddenFrom="sm">
        <GameFooterButton />
      </AppShell.Footer>
    </AppShell>
    <Modal.Root bg="blue" size="sm" opened={opened} onClose={close} shadow="0" centered transitionProps={{ transition:"fade" }}  >
      <Modal.Content bg="transparent" style={{zIndex:10}}>
        <Modal.Body>
          <Text c="white" ta="center" fw="bolder" size={rem(35)}>あいこ</Text>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root> 
    
    
    <Canvas
      flat
      shadows
      camera={{ position: [0, 6, 40] }}
      style={{
        zIndex:-1,
        backgroundColor:"#404B69",
        position: 'absolute',
        top: 0,
        width: '100vw',
        height: '100vh'
      }}
    >
      <Stage adjustCamera={false} environment={"city"} intensity={5}>
        <GameScene roomData={roomData} lastGameData={lastGameData} memberData={memberData} state={state}/>
      </Stage>
    </Canvas>
    </>
  )
}
