import React, { useState } from 'react'
import { ActionIcon, Image, Group, Stack, Drawer, Paper } from '@mantine/core';
import { IconQuestionMark, IconShare2, IconMessage } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { IconX } from '@tabler/icons-react';
import { Chat } from "../components/Chat"
import { HandsButton } from "../components/HandsButton"


export function GameFooterButton() {
  const [hands, setHands] = useState<string>("gu");
  const [drawerMode, setDrawerMode] = useState<string>("chat");
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
          <ActionIcon radius="1000px" variant="white" h={"45"} w={"45"} color="dark" onClick={()=> {setDrawerMode("chat");  open();}}>
            <IconMessage />
          </ActionIcon>
      </Group>
      <Group gap="8" justify='flex-end' w="100%">
          <ActionIcon radius="1000px" variant="white" h={"45"} w={"45"} color="dark" onClick={()=> {setDrawerMode("hand");  open();}}>
            <Image src={"/images/svg/"+ hands + ".svg"} />
          </ActionIcon>
      </Group>
    </Stack>
    
    
      {drawerMode === "chat" && 
        <>
          <Chat opened={opened} close={close}/>
        </>
      }
      {drawerMode === "hand" && 


      <Drawer.Root opened={opened} onClose={close} position="bottom" size="xs">
        <Drawer.Content bg="transparent" style={{borderRadius:"15px 15px 0 0" }} >
        <Drawer.Body>
        <Paper bg="white" radius="lg" p="lg">
        <HandsButton hands={hands} setHands={setHands} close={close} />
        </Paper>
        </Drawer.Body>
        </Drawer.Content>
        </Drawer.Root>
      }
  </>
  )
}
