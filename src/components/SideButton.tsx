import React from 'react'
import { Button, Text, useMantineTheme } from '@mantine/core';

export function SideButton({text, href, bg, color}: any) {
  const theme = useMantineTheme();
  return (
    <Button component="a" href={href} 
      color={bg}
      fullWidth
      justify="start"
      size="xl"
      style={{
        right: 0,
        borderRadius: "1000px 0px 0px 1000px"
      }}
    >
      <Text ml="sm" size="xl" fw="bolder" c={color}>
        {text}
      </Text>
    </Button>
  )
}
