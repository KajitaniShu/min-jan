import React from 'react'
import { ActionIcon, Button, Group, Stack, rem } from '@mantine/core';
import { IconQuestionMark } from '@tabler/icons-react';

export function HomeFooterButton() {

  return (
    <Stack>
      <Group gap="8" justify='flex-end' w="100%">
          <ActionIcon radius="1000px" variant="white" h={"45"} w={"45"} color="dark">
            <IconQuestionMark />
          </ActionIcon>
      </Group>
      <Button color="#5C7CFA" size="lg" radius="md" component="a" href="/room" fullWidth>ルームを作る</Button>
    </Stack>
  )
}
