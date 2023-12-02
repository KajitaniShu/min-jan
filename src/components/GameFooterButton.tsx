import React, { useState } from 'react'
import { ActionIcon, Image, Group, Stack, Drawer, Paper, Button, Text, rem } from '@mantine/core';
import { IconQuestionMark, IconShare2 } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { IconX } from '@tabler/icons-react';

export function GameFooterButton() {
  const [hands, setHands] = useState<string>("gu");
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
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
      <Group gap="8" justify='flex-end' w="100%">
          <ActionIcon radius="1000px" variant="white" h={"45"} w={"45"} color="dark" onClick={open}>
            <Image src={"./images/svg/"+ hands + ".svg"} />
          </ActionIcon>
      </Group>
    </Stack>

    <Drawer.Root size="xs" opened={opened} onClose={close} position="bottom">
    <Drawer.Content bg="transparent">
      <Drawer.Body>
        <Paper
          radius="lg"
          p="xl"
          bg="white"
        >
          <Text size="sm" fw="bold" c="dark" mb="md">次の手を選んでください</Text>
          
          
          <Button variant="filled" radius="xl" mb="sm" color={hands === "gu"    ? "gray.9" : "gray.4"} fullWidth onClick={()=> {close(); setHands("gu")}}>グー</Button>
          <Button variant="filled" radius="xl" mb="sm" color={hands === "choki" ? "gray.9" : "gray.4"} fullWidth onClick={()=> {close(); setHands("choki")}}>チョキ</Button>
          <Button variant="filled" radius="xl" mb="sm" color={hands === "pa"    ? "gray.9" : "gray.4"} fullWidth onClick={()=> {close(); setHands("pa")}}>パー</Button>
        </Paper>
      </Drawer.Body>
    </Drawer.Content>
  </Drawer.Root>
  </>
  )
}
