import React, { useMemo } from 'react'
import { Group, Text, ActionIcon, Drawer, Avatar, Stack } from '@mantine/core';
import { IconDotsVertical, IconPencil, IconX  } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { AvatarIcon } from './AvatarIcon'
import { Profile } from './Profile'
import multiavatar from '@multiavatar/multiavatar'

export function Head({icon}: any) {
    const [opened, { open, close }] = useDisclosure(false);
    const avatarCode = "0123456"
    const svgString = useMemo(() => {
      const input =  multiavatar(avatarCode, true);
      const svgDataBase64 = btoa(unescape(encodeURIComponent(input)));
      return svgDataBase64
    }, [])

  return (
    <>
      <Group justify="space-between" preventGrowOverflow={true} >
        <Group>
          <AvatarIcon avatarCode="sffsfj"  avatarColor="blue.4" size="lg" />
          <Text fw={700} c="#ECE8E8" size="lg">プレイヤー1</Text>
          <ActionIcon variant="transparent" color="rgba(255, 255, 255, 1)" aria-label="Edit Name" onClick={open}>
            <IconPencil style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
        </Group>
        <ActionIcon  radius="lg" size="lg" variant="white" color="dark" onClick={open}>
          <IconDotsVertical />
        </ActionIcon >
      </Group>
      <Drawer.Root opened={opened} position='right' onClose={close} >
        <Drawer.Overlay />
        <Drawer.Content bg="#FAFAFA">
          <Drawer.Header bg="#FAFAFA">
            <Group justify="flex-end" w="100%" p="xs">
              <ActionIcon variant="filled" size="lg"  color="rgba(0, 0, 0, 1)" radius="xl" aria-label="Settings" onClick={close}>
                <IconX  style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </ActionIcon>
            </Group>
          </Drawer.Header>
          <Drawer.Body>
            <Profile avatarCode={avatarCode} />
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  )
}
