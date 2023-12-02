import React from 'react'
import { ActionIcon, Button, Group, Stack, rem } from '@mantine/core';
import { IconQuestionMark, IconShare2 } from '@tabler/icons-react';
import { Paper, Text } from '@mantine/core';

export function GameFooterButton() {

  return (
    <Paper color="white" radius="lg" p="md">
    <Text size="sm" fw="bold" c="dark" mb="md">次の手を選んでください</Text>
      <Button variant="filled" radius="xl" mb="xs" color="gray.9" fullWidth>グー</Button>
      <Button variant="filled" radius="xl" mb="xs" color="gray.4" fullWidth>チョキ</Button>
      <Button variant="filled" radius="xl" mb="xs" color="gray.4" fullWidth>パー</Button>
      </Paper>
  )
}
