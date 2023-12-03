import React from 'react'
import { Button, ActionIcon, Drawer, Paper, TextInput, rem, Group, CloseButton, Stack, Avatar, ScrollArea, Text } from '@mantine/core'
import { Notifications, notifications  } from '@mantine/notifications';
import classes from '../styles/notification.module.css';
import { IconSend } from '@tabler/icons-react';
import { Scroll } from '@react-three/drei';
export function Chat({close}:any) {
  return (
    <>
    <Drawer.Content bg="white" style={{borderRadius:"15px 15px 0 0" }} >
      <Drawer.Body p="lg">
        <Group justify="end">
          <CloseButton onClick={close}/>
        </Group>
        <TextInput  mb="xl" size="md" mt="md"  
          rightSection={
            <ActionIcon size={32} radius="sm" color="dark" variant="filled">
              <IconSend style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          }/>
        <Group>
        {/* <Button
          color="dark"
          onClick={() =>
            {
              console.log("!")
            notifications.show({
              title: 'ひいらぎ',
              message: 'あああああああああああああああああああああああああああああああああああああああああああああああああああ',
              withCloseButton: false,
              classNames: classes,
            })}
          }
          >
          Default notification
        </Button> */}
        </Group>
          <ScrollArea h="60vh" offsetScrollbars>
        <Stack>
          <Paper p="md" radius="md" bg="gray.0">
            <Group>
              <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                alt="Jacob Warnhalter"
                radius="xl"
              />
              <div>
                <Text fz="sm">Jacob Warnhalter</Text>
                <Text fz="xs" c="dimmed">
                  10 minutes ago
                </Text>
              </div>
            </Group>
            <Text ml={rem(50)} mt="xs" size="xs">ああああああああああああああああああああああああああああああ</Text>
          </Paper>
          <Paper p="md" radius="md" bg="gray.0">
            <Group>
              <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                alt="Jacob Warnhalter"
                radius="xl"
              />
              <div>
                <Text fz="sm">Jacob Warnhalter</Text>
                <Text fz="xs" c="dimmed">
                  10 minutes ago
                </Text>
              </div>
            </Group>
            <Text ml={rem(50)} mt="xs" size="xs">ああああああああああああああああああああああああああああああ</Text>
          </Paper>
          <Paper p="md" radius="md" bg="gray.0">
            <Group>
              <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                alt="Jacob Warnhalter"
                radius="xl"
              />
              <div>
                <Text fz="sm">Jacob Warnhalter</Text>
                <Text fz="xs" c="dimmed">
                  10 minutes ago
                </Text>
              </div>
            </Group>
            <Text ml={rem(50)} mt="xs" size="xs">ああああああああああああああああああああああああああああああ</Text>
          </Paper>
          <Paper p="md" radius="md" bg="gray.0">
            <Group>
              <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                alt="Jacob Warnhalter"
                radius="xl"
              />
              <div>
                <Text fz="sm">Jacob Warnhalter</Text>
                <Text fz="xs" c="dimmed">
                  10 minutes ago
                </Text>
              </div>
            </Group>
            <Text ml={rem(50)} mt="xs" size="xs">ああああああああああああああああああああああああああああああ</Text>
          </Paper>
          <Paper p="md" radius="md" bg="gray.0">
            <Group>
              <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                alt="Jacob Warnhalter"
                radius="xl"
              />
              <div>
                <Text fz="sm">Jacob Warnhalter</Text>
                <Text fz="xs" c="dimmed">
                  10 minutes ago
                </Text>
              </div>
            </Group>
            <Text ml={rem(50)} mt="xs" size="xs">ああああああああああああああああああああああああああああああ</Text>
          </Paper>
          <Paper p="md" radius="md" bg="gray.0">
            <Group>
              <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                alt="Jacob Warnhalter"
                radius="xl"
              />
              <div>
                <Text fz="sm">Jacob Warnhalter</Text>
                <Text fz="xs" c="dimmed">
                  10 minutes ago
                </Text>
              </div>
            </Group>
            <Text ml={rem(50)} mt="xs" size="xs">ああああああああああああああああああああああああああああああ</Text>
          </Paper>
        </Stack>
        </ScrollArea>
      </Drawer.Body>
    </Drawer.Content>
    </>
  )
}
