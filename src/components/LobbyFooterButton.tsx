import React from 'react'
import { ActionIcon, Button, Group, Stack, rem } from '@mantine/core';
import { IconQuestionMark, IconShare2 } from '@tabler/icons-react';

export function LobbyFooterButton() {

  return (
    <Stack>
      <Group gap="8" justify='flex-end' w="100%">
          <ActionIcon radius="1000px" variant="white" h={"45"} w={"45"} color="dark">
            <IconQuestionMark />
          </ActionIcon>
      </Group>
      <Group gap="8" justify='flex-end' w="100%">
          <ActionIcon radius="1000px" variant="white" h={"45"} w={"45"} color="dark">
            <IconShare2 />
          </ActionIcon>
      </Group>
      <Button color="#5C7CFA" size="lg" radius="xl" fullWidth>ゲーム開始</Button>
    </Stack>
  )
}
