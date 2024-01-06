import { useState } from 'react';
import { useForm } from '@mantine/form';
import {
  Text,
  Card,
  Group,
  rem,
  Button,
  Divider,
  Input,
  SimpleGrid,
  Image,
  Avatar,
  Center,
} from '@mantine/core';
import { Carousel, useAnimationOffsetEffect, Embla } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { IconBrandGoogleFilled, IconUser  } from '@tabler/icons-react';
const images = [
  'images/icon/man.png',
  'images/icon/man.png',
  'images/icon/man.png',
  'images/icon/man.png',
];


export function UserRegistration() {
  const form = useForm({
    initialValues: {
      name: '',
      character: '',
    },
  });

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));
  return (
    <Card w="100%" withBorder radius="md">
    <Card.Section>
      <Group justify='center' w="100%" py="md" bg="#22A699">
        <Text c="white" fw="bold">ニックネームを登録してください</Text>
      </Group>
      <Divider c="dark" w="100%"/>
    </Card.Section>
    <Card.Section pt="xl" px={rem(50)}>
        <Text size="xs" c="dimmed" mb="xs">ニックネーム</Text>
        <Input size="md" variant="filled" placeholder="10文字以内" />
    </Card.Section>
    <Card.Section py="xl" px={rem(50)}>
        <Text size="xs" c="dimmed" mb="xs">キャラクター</Text>
        <Group justify="space-around">
        <Carousel
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
              <Image src={images[0]} key={images[0]} radius="sm" />
            </Avatar>
            </Center>
          </Carousel.Slide>
          <Carousel.Slide >
            <Center>
            <Avatar size="xl">
              <Image src={images[0]} key={images[0]} radius="sm" />
            </Avatar>
            </Center>
          </Carousel.Slide>
        </Carousel>
            
        </Group>
    </Card.Section>
    
    <Card.Section>
    <Divider c="dark" w="100%" mt="lg" />
      <Group justify='center' w="100%" py="sm">
        <Button size="md" color="dark" radius="xl" variant="filled">
          <Text mx={rem(60)} size="lg" fw="bold">決定</Text>
        </Button>
      </Group>
    </Card.Section>  
    </Card>
    
  );
}