import React from 'react'
import { Center, Container, Group } from '@mantine/core';
import { UserRegistration } from "../components/UserRegistration"

export function CreateRoom() {
  return (
    <Group bg="#F2F2F2">
    <Container size="xs" w="100%" h="100vh" >
      <Center  h="100%">
        <UserRegistration />
      </Center>
    </Container>
    </Group>
  )
}
