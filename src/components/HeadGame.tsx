import React, { useMemo } from 'react'
import { Group, Text, ActionIcon, Drawer, ScrollArea, Stack } from '@mantine/core';
import { IconDotsVertical, IconPencil, IconX  } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Player } from "../components/Player"
import { Profile } from './Profile'
import multiavatar from '@multiavatar/multiavatar'

export function HeadGame({icon}: any) {
    const [opened, { open, close }] = useDisclosure(false);
    const avatarCode = "0123456"

  return (
    <>
      <Group justify="space-between" preventGrowOverflow={true}>
        <Text fw={700} c="#ECE8E8" size="lg">勝ち抜け戦</Text>
        <ActionIcon  radius="lg" size="lg" variant="white" color="dark" onClick={open}>
          <IconDotsVertical />
        </ActionIcon >
      </Group>
      <ScrollArea type="always" offsetScrollbars>
        <div className="scroll-x">
          <Player name="fisjefiosejfiojiofsj" avatarCode="wdadadwaw" avatarColor="blue.6" anser={null} />
          <Player name="ｊふぁｐうぇｆｊぽいえｓｊふぉ" avatarCode="wdadadwaw" avatarColor="blue.6" anser={null} />
          <Player name="ひいらぎ" avatarCode={avatarCode} avatarColor="blue.6" anser={""} />
          <Player name="ひいらぎ" avatarCode={avatarCode} avatarColor="blue.6" anser={null} />
          <Player name="ひいらぎ" avatarCode={avatarCode} avatarColor="blue.6" anser={null} />
          <Player name="ひいらぎ" avatarCode={avatarCode} avatarColor="blue.6" anser={null} />
          <Player name="ひいらぎ" avatarCode={avatarCode} avatarColor="blue.6" anser={null} />
          <Player name="ひいらぎ" avatarCode={avatarCode} avatarColor="blue.6" anser={null} />
          <Player name="ひいらぎ" avatarCode={avatarCode} avatarColor="blue.6" anser={null} />
        </div>
      </ScrollArea>
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
