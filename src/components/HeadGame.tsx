import React, { useMemo } from 'react'
import { Group, Text, ActionIcon, Drawer, ScrollArea, Stack } from '@mantine/core';
import { IconDotsVertical, IconChevronsRight, IconX  } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Player } from "../components/Player"
import { Profile } from './Profile'
import multiavatar from '@multiavatar/multiavatar'

export function HeadGame({memberData, userData, type}: any) {
    const [opened, { open, close }] = useDisclosure(false);
    const color = ["#362FD9", "#F11A7B", "#105E62", "#795548", "#0D7377", "#6500ff", "#9a00ff"];
    const gameType = ["1位決定戦", "敗者決定戦"]
    console.log(type)
  return (
    <>
      <Group justify="space-between" preventGrowOverflow={true}>
        <Group gap={0}>
        <IconChevronsRight style={{color:"white"}}/>
        <Text fw={700} c="white" size="lg">{type !== null ? gameType[type] : "-"}</Text>
        </Group>
        <ActionIcon  radius="lg" size="lg" variant="white" color="dark" onClick={open}>
          <IconDotsVertical />
        </ActionIcon >
      </Group>
      <ScrollArea offsetScrollbars>
        <div className="scroll-x">
          {memberData && memberData.map((data: any, index: any) => {return (
            <Player name={data.name} color={color[index]} src={"/models/characters/001"/*+String(index+1)*/ + ".glb"} key={index}/>
          )})}
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
            <Profile userData={userData}/>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  )
}
