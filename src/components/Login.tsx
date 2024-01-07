import { useCallback, useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import {
  Text,
  Card,
  Group,
  rem,
  Button,
  Divider,
  Stack,
  Container,
  LoadingOverlay,
  Avatar,
  Center,
} from '@mantine/core';
import '@mantine/carousel/styles.css';
import { IconUser  } from '@tabler/icons-react';
import { db, auth } from '../config/firebase'
import {signInAnonymously } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaUser } from "react-icons/fa";


export function Login() {
  const [sending, setSending] = useState(false);

  async function login(){
    setSending(true);     // 送信中に決定ボタンを押せないようにローディングを表示
    await signInAnonymously(auth);
    setSending(false);    // ローディングを非表示
  }

  return (
    <Group bg="#F2F2F2">
    <Container size={420} w="100%" h="100vh">
    <Center  h="100%">
    <Card p="md" withBorder radius="md" w="100%">
    <LoadingOverlay visible={sending} zIndex={1000} loaderProps={{ color: 'cyan' }} overlayProps={{ radius: "sm", blur: 2 }} />
      <Card.Section >
        <Stack justify='center' gap={0} pb="sm" px="sm">
          <Text c="dark" fw="bold" ta="center">ログイン</Text>
          <Text c="dimmed"  size="xs" ta="center">ログインすることでルームに入室できるようになります</Text>
        </Stack>
      <Divider c="dark" w="100%"/>
      </Card.Section>

      <Card.Section py="xl" px={rem(50)} bg="gray.0">
      <Button leftSection={<FcGoogle />} mb="xs" fullWidth variant="default" ><Text c="dark" size="sm" fw="bold">Googleで続ける</Text></Button>
      <Button  onClick={()=>login()} leftSection={<FaUser />} fullWidth variant="default"><Text c="dark" size="sm" fw="bold">匿名で続ける</Text></Button>
      </Card.Section>
      
      <Card.Section>
      <Divider c="dark" w="100%" />
        <Group justify='center' w="100%" py="md">
        </Group>
      </Card.Section>  
    </Card>
    </Center>
    </Container>
    </Group>
  );
}