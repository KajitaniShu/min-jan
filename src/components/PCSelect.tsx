import React, { useState } from 'react'
import { Divider, Group, Text, Stack, Flex, Image, ActionIcon, ColorPicker, Button, Anchor, rem} from '@mantine/core';

export function PCSelect() {
  const [hands, setHands] = useState<string>("gu");
  
  return (
    <>
    <Flex
      gap="sm"
      align="center"
      direction="column"
      wrap="wrap"
      w="100%"
      pt="xl"
      pb={rem(100)}
    >
      <Text size="sm" fw="bold" c="dark" mb="sm">次の手を選んでください</Text>
        <Button variant="filled" radius="xl" color={hands === "gu"    ? "gray.9" : "gray.4"} fullWidth onClick={()=>setHands("gu")}>グー</Button>
        <Button variant="filled" radius="xl" color={hands === "choki" ? "gray.9" : "gray.4"} fullWidth onClick={()=>setHands("choki")}>チョキ</Button>
        <Button variant="filled" radius="xl" color={hands === "pa"    ? "gray.9" : "gray.4"} fullWidth onClick={()=>setHands("pa")}>パー</Button>
    </Flex>
    </>
  )
}
