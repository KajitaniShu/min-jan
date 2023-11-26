import { AppShell, Flex, rem, Box, ScrollArea, Text, Modal } from '@mantine/core';
import { Canvas } from '@react-three/fiber'
import { HeadGame } from "./HeadGame"
import { SideButton } from "../components/SideButton"
import { Player } from "../components/Player"
import { LobbyFooterButton } from "../components/LobbyFooterButton"
import { Carousel } from '@mantine/carousel';
import { AvatarIcon } from './AvatarIcon';
import { PCSelect } from './PCSelect';
import "../index.css"
import { useDisclosure } from '@mantine/hooks';


export function Game() {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <>
    <AppShell
      header={{ height: rem(200) }}
      aside={{ width: 400, breakpoint: 'sm', collapsed: { mobile: true } }}
      footer={{height: "auto", collapsed: true}}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header p="md" style={{backgroundColor: "transparent"}}>
        <HeadGame icon="./images/icon/0.png"/>
        <ScrollArea type="always" offsetScrollbars>
            <div className="scroll-x">
              <Player name="fisjefiosejfiojiofsj" avatarCode="wdadadwaw" avatarColor="blue.6" anser={null} />
              <Player name="ｊふぁｐうぇｆｊぽいえｓｊふぉ" avatarCode="wdadadwaw" avatarColor="blue.6" anser={null} />
              <Player name="ひいらぎ" avatarCode="wdadadwaw" avatarColor="blue.6" anser={""} />
              <Player name="ひいらぎ" avatarCode="wdadadwaw" avatarColor="blue.6" anser={null} />
              <Player name="ひいらぎ" avatarCode="wdadadwaw" avatarColor="blue.6" anser={null} />
              <Player name="ひいらぎ" avatarCode="wdadadwaw" avatarColor="blue.6" anser={null} />
              <Player name="ひいらぎ" avatarCode="wdadadwaw" avatarColor="blue.6" anser={null} />
              <Player name="ひいらぎ" avatarCode="wdadadwaw" avatarColor="blue.6" anser={null} />
              <Player name="ひいらぎ" avatarCode="wdadadwaw" avatarColor="blue.6" anser={null} />
            </div>
        </ScrollArea>
        </AppShell.Header>
        <AppShell.Aside pl="md" pr={rem(50)} style={{backgroundColor: "transparent"}}>
          <PCSelect />
        </AppShell.Aside>

      <AppShell.Main>
      </AppShell.Main>
      <AppShell.Footer bg="transparent" p="xs" pb="lg" hiddenFrom="sm">
          <LobbyFooterButton />
      </AppShell.Footer>
    </AppShell>

    <Modal.Root size="xs" opened={opened} onClose={close} shadow="0" centered transitionProps={{ transition:"fade" }} >
        <Modal.Content bg="transparent">
          <Modal.Body>
            <Box bg="transparent" p="md" style={{border: "4px solid white", borderRadius:"20px"}}>
              <Text c="blue.0" ta="center" fw="bold" size={rem(30)}>あああああああああああ の勝ち</Text>
            </Box>
            </Modal.Body>
        </Modal.Content>
      </Modal.Root>

    <Canvas
      style={{
        zIndex:-1,
        backgroundColor: "black",
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
