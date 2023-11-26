import { AppShell, Flex, rem, Paper, Container, Text, Center } from '@mantine/core';
import { Canvas } from '@react-three/fiber'
import { Head } from "./Head"
import { SideButton } from "../components/SideButton"
import { LobbyFooterButton } from "../components/LobbyFooterButton"

export function Select() {
  return (
    <>
    <AppShell
      header={{ height: 80 }}
      footer={{height: "auto", collapsed: true}}
      padding="md"
      withBorder={false}
      bg="#B99470"
    >
      <AppShell.Header p="md" style={{backgroundColor: "transparent"}}>
        <Head icon="./images/icon/0.png"/>
      </AppShell.Header>
      
      <AppShell.Main>
        <Container size="sm" bg="blue">
          <Paper>
            <Text>ああああああ</Text>
          </Paper>
        </Container>
      </AppShell.Main>
    </AppShell>
    </>
  )
}
