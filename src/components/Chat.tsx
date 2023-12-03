import React from 'react'
import { Button, ActionIcon, Drawer, Paper, TextInput, rem, Group, Flex, Stack, Avatar, ScrollArea, Text } from '@mantine/core'
import { Notifications, notifications  } from '@mantine/notifications';
import classes from '../styles/notification.module.css';
import { IconSend } from '@tabler/icons-react';
import { Scroll } from '@react-three/drei';
export function Chat({opened, close}:any) {
  return (
    <>
    <Drawer.Root size={"lg"} opened={opened} onClose={close} position="bottom">
      
    <Drawer.Content bg="white" >
      <Drawer.Header w="100%" py="xs" px="md">
      <Flex
        w="100%"
        justify="flex-start"
        align="flex-start"
        direction="column"
      >
          <Drawer.CloseButton />
          <TextInput  mb="xl" size="md" mt="md" w="100%"
            rightSection={
              <ActionIcon size={32} radius="sm" color="dark" variant="filled">
                <IconSend style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
              </ActionIcon>
            }/>
      </Flex>
      </Drawer.Header>
      <Drawer.Body p="lg">
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
      </Drawer.Body>
    </Drawer.Content>
    </Drawer.Root>
    </>
  )
}
