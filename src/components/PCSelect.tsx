import React, {useMemo} from 'react'
import { Divider, Group, Text, Stack, Flex, Image, ActionIcon, ColorPicker, Button, Anchor, rem} from '@mantine/core';
import multiavatar from '@multiavatar/multiavatar'
import { IconRefresh } from '@tabler/icons-react';

export function PCSelect() {

  return (
    <Flex
      h={"100vh"}
      gap="sm"
      justify="flex-end"
      align="flex-end"
      direction="column"
      wrap="wrap"
      w="100%"
      pb={rem(100)}
    >
      <Group justify='space-between' w="100%" >
        <Stack>
          <ActionIcon variant="filled" color="#ED46A5" size={rem(80)} radius="1000px" aria-label="Settings" p={rem(8)} style={{border:"4px solid #FF9EC6"}}>
            <Image src="./images/gu.png"/>
          </ActionIcon>
          <Text c="dimmed" ta="center" fw="bold" size="sm">グー</Text>
        </Stack>
        <Stack>
          <ActionIcon variant="filled" color="#E9B824" size={rem(80)} radius="1000px" aria-label="Settings" p={rem(8)} style={{border:"4px solid #FFE17B"}}>
            <Image src="./images/choki.png"/>
          </ActionIcon>
          <Text c="dimmed" ta="center" fw="bold" size="sm">チョキ</Text>
        </Stack>
        <Stack>
          <ActionIcon variant="filled" color="#3BD4CA" size={rem(80)} radius="1000px" aria-label="Settings" p={rem(8)} style={{border:"4px solid #BFF5F3"}}>
            <Image src="./images/pa.png"/>
          </ActionIcon>
          <Text c="dimmed" ta="center" fw="bold" size="sm">パー</Text>
        </Stack>
      </Group>
      <Button mt="md" bg="#5C7CFA" color="#EDF2FF" size="md" radius="md" fullWidth>決定</Button>
    </Flex>
    
  )
}
