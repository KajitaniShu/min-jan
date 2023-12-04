import { AppShell, Box, rem, ScrollArea, Text, Modal, Center } from '@mantine/core';
import { Canvas } from '@react-three/fiber'
import { HeadGame } from "./HeadGame"
import { LobbyFooterButton } from "../components/LobbyFooterButton"
import { GameScene } from "../scenes/GameScene"
import { GameFooterButton } from "../components/GameFooterButton"
import { PCSelect } from './PCSelect';
import "../index.css"
import { useDisclosure } from '@mantine/hooks';
import { OrbitControls, Environment, SpotLight, ContactShadows } from '@react-three/drei'
import { where, collection, query } from 'firebase/firestore';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import { db, auth } from '../config/firebase'


export function Game({roomData, userData, roomId}: any) {
  const [opened, { open, close }] = useDisclosure(false);
  const [memberData] = useCollectionDataOnce(query(collection(db, "users"),where('uuid', 'in', roomData[0].members)));
  const [lastGameData, loading] = useCollectionDataOnce(query(collection(db, "games"), where("uid", "==", String(roomId)+"-r1")));
  
  return (
    <>
    <AppShell
      header={{ height: 80 }}
      aside={{ width: 320, breakpoint: 'sm', collapsed: { mobile: true } }}
      footer={{height: "auto", collapsed: true}}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header p="md" style={{backgroundColor: "transparent"}}>
        <HeadGame icon="./images/icon/0.png" memberData={memberData} userData={userData}/>
        </AppShell.Header>
        <AppShell.Aside pl="md" pr={rem(50)} style={{backgroundColor: "transparent"}}>
          <div style={{flex:1}}/>
          <PCSelect />
        </AppShell.Aside>
      <AppShell.Main>
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
      camera={{ position: [0, 20, 40] }}
      style={{
        zIndex:-1,
        backgroundColor:"#B7C4CF",
        position: 'absolute',
        top: 0,
        width: '100vw',
        height: '100vh'
      }}
    >
      <OrbitControls/>
      <ambientLight intensity={2}/>
      <directionalLight position={[2, 10, 10]}/>
      <Environment preset="city" />
      <GameScene lastGameData={lastGameData}/>
    </Canvas>
    </>
  )
}
