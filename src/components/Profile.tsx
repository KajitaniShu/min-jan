import React, {useMemo} from 'react'
import { Divider, Group, Text, Paper, Container, Input, Avatar, ActionIcon, ColorPicker, Button, Anchor, rem} from '@mantine/core';
import multiavatar from '@multiavatar/multiavatar'
import { IconRefresh } from '@tabler/icons-react';

export function Profile({avatarCode, avatarColor}: any) {
  const svgString = useMemo(() => {
    const input =  multiavatar(avatarCode, false);
    const svgDataBase64 = btoa(unescape(encodeURIComponent(input)));
    return svgDataBase64
  }, [])

  return (
    <Container>
      <Group mb="xl">
        <Divider size="xl" orientation="vertical" color="dark" />
        <Text size="xl" fw="bolder" c="dark.4">ユーザー情報</Text>
      </Group>
      <Paper withBorder radius="md" shadow="xs" py="lg" px="xl">
        <Group mt="sm" mb="xl" justify="space-between">
          <Text>なまえ</Text>
          <Input variant="filled" placeholder="プレイヤー1" />
        </Group>
        <Group mb="xl" justify="space-between">
        <Text>アイコン</Text>
          <Group>
          <ActionIcon variant="transparent" color="rgba(0, 0, 0, 1)" aria-label="Settings">
            <IconRefresh style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
            <Avatar src={`data:image/svg+xml;charset=utf-8;base64, ${svgString}`} alt="avatar" size="lg" color="blue.4" />
          </Group>
        </Group>
        <Group preventGrowOverflow mb="xl" justify="space-between">
          <Text>背景色</Text>
          <ColorPicker format="rgb" value={avatarColor} />
        </Group>
      </Paper>
      <Button mt="xl" bg="black" size="md" fullWidth>変更する</Button>

      <Text c="dimmed" size="xs" mt={rem(70)}>オンラインじゃんけんで使用されているユーザーアイコンは
      <Anchor href="https://mantine.dev/" target="_blank">
        Multiavatar
      </Anchor>
      によって生成されています．</Text>
    </Container>
    
  )
}
