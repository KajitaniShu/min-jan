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
    <Group bg="gray.1">
    <Container size={420} w="100%" h="100vh">
    <Center  h="100%">
    <Card p="md" withBorder radius="md" w="100%">
    <LoadingOverlay visible={sending} zIndex={1000} loaderProps={{ color: 'cyan' }} overlayProps={{ radius: "sm", blur: 2 }} />
      <Card.Section pt="sm" px={rem(50)}>
        <Stack justify='center' gap={0} px="sm">
          <Text c="dark.4" size="lg" fw="bold" ta="center" >ログイン</Text>
        </Stack>
      </Card.Section>

      <Card.Section py="xl" px={rem(50)}>
      <Button disabled leftSection={<FcGoogle />} mb="xs" size="lg" fullWidth variant="default" ><Text c="dark.4" size="sm" fw="bold">Googleで続ける</Text></Button>
      <Button  onClick={()=>login()} leftSection={<FaUser />} size="lg" fullWidth variant="default"><Text c="dark.4" size="sm" fw="bold">匿名で続ける</Text></Button>
      </Card.Section>
      
      <Card.Section bg="gray.0">
      <Divider c="dark" w="100%" />
        <Group justify='center' w="100%" py="md" px="xl">
          <Text c="gray"  size={rem(10)} ta="center">本サイトではユーザー識別のためにのみログイン情報を使用しています．詳しくは プライバシーポリシー をご覧ください．</Text>
        </Group>
      </Card.Section>  
    </Card>
    </Center>
    </Container>
    </Group>
  );
}