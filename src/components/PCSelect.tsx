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
      <Text size="sm" fw="bold" c="dark" mb="md">次の手を選んでください</Text>
      <Button variant="filled" radius="xl" color="gray.9" fullWidth>グー</Button>
      <Button variant="filled" radius="xl" color="gray.4" fullWidth>チョキ</Button>
      <Button variant="filled" radius="xl" color="gray.4" fullWidth>パー</Button>
    </Flex>
    </>
  )
}
