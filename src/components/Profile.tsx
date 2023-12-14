import React, {useMemo} from 'react'
import { Divider, Group, Text, Paper, Container, Input, Avatar, ActionIcon, ColorPicker, Button, Anchor, rem} from '@mantine/core';
import multiavatar from '@multiavatar/multiavatar'
import { IconRefresh } from '@tabler/icons-react';

export function Profile({userData}: any) {
  console.log(userData)
  return (
    <Container>
      <Group mb="xl">
        <Divider size="xl" orientation="vertical" color="dark" />
        <Text size="xl" fw="bolder" c="dark.4">ユーザー情報</Text>
      </Group>
      <Paper withBorder radius="md" shadow="xs" py="lg" px="xl">
        <Text size="xs" c="dimmed" mb="xs">ニックネーム</Text>
        <Input size="md" variant="filled" placeholder={userData && userData.length > 0 && userData[0].name} />
      </Paper>
      <Button mt="xl" bg="black" size="md" fullWidth>変更する</Button>
    </Container>
    
  )
}
