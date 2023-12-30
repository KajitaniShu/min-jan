import React, {useState, useEffect} from 'react'
import { UnstyledButton, Image, Group, rem, Drawer, Button, Text, Divider, Container, Paper, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconCircleCheckFilled } from '@tabler/icons-react';
import { setHand } from '../config/firebase'


export function SelectDrawer({trigger, setDrawerMode, state, roomId, uuid, round}:any) {
  const [hands, setHands] = useState<number>(0);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if(trigger || (state==="waiting" && !opened)) open();
    else        close();
  }, [trigger, state])

  return (
    <Drawer.Root  opened={opened} onClose={()=>{close(); setDrawerMode("none")}} position="bottom">
    <Drawer.Content bg="#F5F5F5" style={{borderRadius:"15px 15px 0 0" }}>
    <Drawer.Header>
      <Group justify='center' w="100%">
        <Text c="dark.4" fw="bold" >手を選んでください</Text>
      </Group>
    </Drawer.Header>

    <Drawer.Body p="0">
      <Divider c="dark" w="100%"/>
      <Container>
        <Paper my="xl" mx="md" py="xs" radius="md" withBorder >
          <Group justify="center" w="100%">
          <UnstyledButton h={rem(50)} w="100%" px="xl" onClick={()=>setHands(0)}>
          <Group justify="flex-start">
              <IconCircleCheckFilled style={{color:hands === 0 ? "#22A699" : "#ccc"}}/>
              <Text c="dark.4" fw="bold" size="sm">グー</Text>
            </Group>
          </UnstyledButton>
          </Group>
          <Group justify='center'><Divider w="90%" color="gray.2" /></Group>
          <Group justify="center" w="100%">
          <UnstyledButton h={rem(50)} w="100%" px="xl" onClick={()=>setHands(1)}>
          <Group justify="flex-start">
              <IconCircleCheckFilled style={{color:hands === 1 ? "#22A699" : "#ccc"}}/>
              <Text c="dark.4" fw="bold" size="sm">チョキ</Text>
            </Group>
          </UnstyledButton>
          </Group>
          <Group justify='center'><Divider w="90%" color="gray.2"/></Group>
          <Group justify="center" w="100%">
          <UnstyledButton h={rem(50)} w="100%" px="xl" onClick={()=>setHands(2)}>
            <Group justify="flex-start">
              <IconCircleCheckFilled style={{color:hands === 2 ? "#22A699" : "#ccc"}}/>
              <Text c="dark.4" fw="bold" size="sm">パー</Text>
            </Group>
          </UnstyledButton>
          </Group>
        </Paper>


      <Group mt="xs" justify='flex-end'>
        <Button radius="md" size="md" mx="md" color="dark" fullWidth onClick={()=>{setHand(hands, uuid, roomId, round); close(); setDrawerMode("none")}}>
            決定
        </Button>
      </Group>
      </Container>
    </Drawer.Body>
    </Drawer.Content>
    </Drawer.Root>
  )
}
