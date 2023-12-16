import React from 'react'
import { Group, Text, Container, Divider, Paper, Input, Center, Button } from '@mantine/core';

export function EnterName({}) {
  return (
    <Container size="xs">
      <Center w="100%" >
      <Group mb="xl">
        <Divider size="xl" orientation="vertical" color="dark" />
        <Text size="xl" fw="bolder" c="dark.4">ユーザー情報</Text>
      </Group>
      <Paper withBorder radius="md" shadow="xs" py="lg" px="xl">
        <Text size="xs" c="dimmed" mb="xs">ニックネーム</Text>
        <Input size="md" variant="filled" />
      </Paper>
      <Button mt="xl" bg="black" size="md" fullWidth>変更する</Button>
      </Center>
    </Container>
  )
}
