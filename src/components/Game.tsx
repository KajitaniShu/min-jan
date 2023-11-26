import { AppShell, Flex, rem, Box, ScrollArea, Text, Modal } from '@mantine/core';
import { Canvas } from '@react-three/fiber'
import { HeadGame } from "./HeadGame"
import { LobbyFooterButton } from "../components/LobbyFooterButton"
import { GameFooterButton } from "../components/GameFooterButton"
import { Carousel } from '@mantine/carousel';
import { PCSelect } from './PCSelect';
import "../index.css"
import { useDisclosure } from '@mantine/hooks';


export function Game() {
  const [opened, { open, close }] = useDisclosure(true);
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
        <HeadGame icon="./images/icon/0.png"/>
        </AppShell.Header>
        <AppShell.Aside pl="md" pr={rem(50)} style={{backgroundColor: "transparent"}}>
          <div style={{flex:1}}/>
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
          <PCSelect />

            {/* <Box bg="transparent" p="md" style={{border: "3px solid white", borderRadius:"20px"}}>
              <Text c="blue.0" ta="center" fw="bold" size={rem(18)}>ああああああああああ の勝ち</Text>
            </Box> */}
            </Modal.Body>
        </Modal.Content>
      </Modal.Root>

    <Canvas
      style={{
        zIndex:-1,
        backgroundColor: "#2C3742",
        position: 'absolute',
        top: 0,
        width: '100vw',
        height: '100vh'
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
    </>
  )
}
