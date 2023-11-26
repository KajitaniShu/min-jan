import React, {useMemo} from 'react'
import { Divider, Group, Text, Stack, Flex, Image, ActionIcon, ColorPicker, Button, Anchor, rem} from '@mantine/core';
import multiavatar from '@multiavatar/multiavatar'
import { IconRefresh } from '@tabler/icons-react';

export function PCSelect() {

  return (
    <>
    <Flex
      gap="sm"
      align="center"
      direction="column"
      wrap="wrap"
      w="100%"
      pt="xl"
      pb={rem(100)}
    >
      <Text size="sm" fw="bold" c="#f2f2f2" mb="md">次の手を選んでください</Text>
      <Group justify='center' w="100%" >
        <Stack>
          <ActionIcon variant="filled" color="#fff" size={rem(60)} radius="1000px" aria-label="Settings" p={rem(14)}>
            <Image src="./images/gu.png"/>
          </ActionIcon>
          <Text c="#f2f2f2" ta="center" fw="bold" size="sm">グー</Text>
        </Stack>
        <Stack>
          <ActionIcon variant="filled" color="#fff" size={rem(60)} radius="1000px" aria-label="Settings" p={rem(14)}>
            <Image src="./images/choki.png"/>
          </ActionIcon>
          <Text c="#f2f2f2" ta="center" fw="bold" size="sm">チョキ</Text>
        </Stack>
        <Stack>
          <ActionIcon variant="filled" color="#fff" size={rem(60)} radius="1000px" aria-label="Settings" p={rem(14)}>
            <Image src="./images/pa.png"/>
          </ActionIcon>
          <Text c="#f2f2f2" ta="center" fw="bold" size="sm">パー</Text>
        </Stack>
      </Group>
    </Flex>
    </>
  )
}
