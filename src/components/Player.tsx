import React from 'react'
import { Group, Text, rem, Stack, Image } from '@mantine/core';
import { AvatarIcon } from './AvatarIcon'


export function Player({name, color, src}: any) {
  
  return (
    <Stack gap="xs" align="center" w={rem(50)} mx="xs">
      <Text ta="center" size={rem(10)} w="100%" fw="bolder" lineClamp={1} c="white">
        {name}
      </Text>
      <AvatarIcon color={color} size={rem(50)} src={src} />
    </Stack>
)
}
