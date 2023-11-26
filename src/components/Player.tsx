import React from 'react'
import { Group, Text, rem, Stack, Image } from '@mantine/core';
import { AvatarIcon } from './AvatarIcon'


export function Player({name, avatarCode, avatarColor, anser}: any) {
  return (
    <Stack gap="xs" align="center" w={rem(50)} mx="xs">
      <Text ta="center" size={rem(10)} w="100%" fw="bolder" lineClamp={1} c="gray.0">
        {name}
      </Text>
      <AvatarIcon avatarCode={avatarCode}  avatarColor={avatarColor} size="lg" />
    {anser !== null &&
      <div className="balloon3-left">
        <Image src="./images/gu.png" />
      </div>
    }
    </Stack>
)
}
