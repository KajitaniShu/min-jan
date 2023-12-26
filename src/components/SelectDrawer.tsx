import React, {useState, useEffect} from 'react'
import { UnstyledButton, Image, Group, rem, Drawer, Button, Text, Divider, Container, Paper, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconCircleCheckFilled } from '@tabler/icons-react';

export function SelectDrawer({trigger, setDrawerMode, state}:any) {
  const [hands, setHands] = useState<string>("gu");
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if(trigger || (state==="waiting" && !opened)) open();
    else        close();
  }, [trigger, state])

  return (
    <Drawer.Root size="lg" opened={opened} onClose={()=>{close(); setDrawerMode("none")}} position="bottom">
    <Drawer.Content bg="#F5F5F5" style={{borderRadius:"15px 15px 0 0" }}>
    <Drawer.Header bg="white">
      <Group justify='center' w="100%">
        <Text c="dark.4" fw="bold">手を選んでください</Text>
      </Group>
    </Drawer.Header>

    <Drawer.Body p="0">
      <Divider c="dark" w="100%"/>
      <Container>
        <Paper my="xl" mx="md" py="xs" radius="md" withBorder >
          <Group justify="center" w="100%">
          <UnstyledButton h={rem(50)} w="100%" px="xl" onClick={()=>setHands("gu")}>
          <Group justify="flex-start">
              <IconCircleCheckFilled style={{color:hands === "gu" ? "#22A699" : "#ccc"}}/>
              <Text c="dark.4" fw="bold" size="sm">グー</Text>
            </Group>
          </UnstyledButton>
          </Group>
          <Group justify='center'><Divider w="90%" color="gray.2" /></Group>
          <Group justify="center" w="100%">
          <UnstyledButton h={rem(50)} w="100%" px="xl" onClick={()=>setHands("choki")}>
          <Group justify="flex-start">
              <IconCircleCheckFilled style={{color:hands === "choki" ? "#22A699" : "#ccc"}}/>
              <Text c="dark.4" fw="bold" size="sm">チョキ</Text>
            </Group>
          </UnstyledButton>
          </Group>
          <Group justify='center'><Divider w="90%" color="gray.2"/></Group>
          <Group justify="center" w="100%">
          <UnstyledButton h={rem(50)} w="100%" px="xl" onClick={()=>setHands("pa")}>
            <Group justify="flex-start">
              <IconCircleCheckFilled style={{color:hands === "pa" ? "#22A699" : "#ccc"}}/>
              <Text c="dark.4" fw="bold" size="sm">パー</Text>
            </Group>
          </UnstyledButton>
          </Group>
        </Paper>



      <Group mt="xs">
        <Button radius="md" size="md" mx="md" style={{ flex: 1 }} color="dark" onClick={()=>{close(); setDrawerMode("none")}}>
            決定
        </Button>
      </Group>
      </Container>
    </Drawer.Body>
    </Drawer.Content>
    </Drawer.Root>
  )
}
