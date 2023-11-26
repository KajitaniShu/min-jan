import { AppShell, Flex, rem } from '@mantine/core';
import { Canvas } from '@react-three/fiber'
import { HeadGame } from "./HeadGame"
import { SideButton } from "../components/SideButton"
import { LobbyFooterButton } from "../components/LobbyFooterButton"

export function Lobby() {
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


      <AppShell.Aside pl="md" py="md" style={{backgroundColor: "transparent"}}>
        <div style={{flex:1}}/>
        <Flex
          gap="sm"
          justify="flex-end"
          align="flex-end"
          direction="column"
          wrap="wrap"
          w="100%"
          pb={rem(100)}
        >
          <SideButton text="ルーム設定" bg="#ECE8E8" color="#2D2A29"/>
          <SideButton text="友達を招待" bg="#ECE8E8" color="#2D2A29"/>
          <SideButton text="ゲーム開始" bg="#5C7CFA" color="#EDF2FF"/>
        </Flex>
      </AppShell.Aside>
      
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
