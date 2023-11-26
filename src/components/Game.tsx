import { AppShell, Flex, rem, Paper, ScrollArea, px, Group } from '@mantine/core';
import { Canvas } from '@react-three/fiber'
import { HeadGame } from "./HeadGame"
import { SideButton } from "../components/SideButton"
import { Player } from "../components/Player"
import { LobbyFooterButton } from "../components/LobbyFooterButton"
import { Carousel } from '@mantine/carousel';
import { AvatarIcon } from './AvatarIcon';
import "../index.css"

export function Game() {
  return (
    <>
    <AppShell
      header={{ height: 80 }}
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


      <AppShell.Main>
      </AppShell.Main>
      <AppShell.Footer bg="transparent" p="xs" pb="lg" hiddenFrom="sm">
          <LobbyFooterButton />
      </AppShell.Footer>
    </AppShell>

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
