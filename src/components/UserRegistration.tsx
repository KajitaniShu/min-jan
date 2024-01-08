import { useCallback, useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import {
  Text,
  Card,
  Group,
  rem,
  Button,
  Divider,
  TextInput,
  Stack,
  LoadingOverlay,
  Container,
  Image,
  Avatar,
  Center,
} from '@mantine/core';
import { Carousel, useAnimationOffsetEffect, Embla } from '@mantine/carousel';
import { setUser } from '../config/firebase'
import '@mantine/carousel/styles.css';
import { IconBrandGoogleFilled, IconUser  } from '@tabler/icons-react';
const images = [
  '/images/icon/man.png',
  '/images/icon/man.png',
  '/images/icon/man.png',
  '/images/icon/man.png',
];


export function UserRegistration({uuid}: any) {
  const [sending, setSending] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      character: 0,
    },
    validate: {
      name: (value) => 
        value.length > 10 ? '10文字以内にしてください' : null,
    },
  });

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  async function submit(name: string, character: number ){
    setSending(true);     // 送信中に決定ボタンを押せないようにローディングを表示
    await setUser(name, character, uuid);  // firebaseにデータを追加
    setSending(false);    // ローディングを非表示
  }

  return (
    <form
      onSubmit={form.onSubmit((values) => { submit(values.name, values.character); })}
    >
    <Group bg="gray.1">
    <Container size={420} w="100%" h="100vh">
    <Center  h="100%">
    <Card p="md" withBorder radius="md" w="100%">
    <LoadingOverlay visible={sending} zIndex={1000} loaderProps={{ color: 'cyan' }} overlayProps={{ radius: "sm", blur: 2 }} />
      <Card.Section pt="sm"  px={rem(50)}>
        <Stack justify='center' gap={0} px="sm">
          <Text c="dark.4" size="lg" fw="bold" ta="center" >アカウント情報</Text>
        </Stack>
      </Card.Section>

      <Card.Section pt="xl" px={rem(50)}>
      <Text size="xs" c="dimmed" mb="xs">ニックネーム</Text>
        <TextInput size="md" required placeholder="10文字以内" {...form.getInputProps('name')}/>
      </Card.Section>

      <Card.Section py="xl" px={rem(50)}>
        <Text size="xs" c="dimmed" mb="xs">キャラクター</Text>
        <Group justify="space-around">
        <Carousel
          onSlideChange={(index:number)=>{form.setFieldValue('character', index)}}
          slideSize="100%" controlsOffset="xs" controlSize={31} loop align="center"
        >
          <Carousel.Slide>
            <Center>
            <Avatar size="xl">
              <Image src={images[0]} key={images[0]} radius="sm" />
            </Avatar>
            </Center>
          </Carousel.Slide>
          <Carousel.Slide >
            <Center>
            <Avatar size="xl">
              <Image src={images[1]} key={images[0]} radius="sm" />
            </Avatar>
            </Center>
          </Carousel.Slide>
          <Carousel.Slide >
            <Center>
            <Avatar size="xl">
              <Image src={images[2]} key={images[0]} radius="sm" />
            </Avatar>
            </Center>
          </Carousel.Slide>
        </Carousel>
            
        </Group>
      </Card.Section>
      
      <Card.Section bg="gray.0" mt="md">
        <Group justify='center' w="100%" py="xl" px={rem(50)}>
          <Button fullWidth size="md" color="dark" radius="md" variant="filled" type="submit">
            <Text size="lg" fw="bold">決定</Text>
          </Button>
        </Group>
      </Card.Section>
    </Card>
    </Center>
    </Container>
    </Group>
    </form>
  );
}