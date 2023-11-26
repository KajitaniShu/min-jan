import { AppShell, Flex, rem } from '@mantine/core';
import { Canvas } from '@react-three/fiber'
import { Lobby } from "../components/Lobby"
import { Game } from "../components/Game"

export function Room() {
  return (
    <>
      {/* <Lobby /> */}
      <Game />
    </>
  )
}
