import React, { useState } from 'react'
import { Divider, Group, Text, Stack, Flex, Image, ActionIcon, Overlay, Button, Anchor, rem} from '@mantine/core';

export function PCSelect() {
  const [hands, setHands] = useState<string>("gu");
  
  return (
    <>
    
    <Flex
      gap="sm"
      direction="column"
      wrap="wrap"
      w="100%"
      h="100vh"
      pt="xl"
      pb={rem(100)}
    >
    <div style={{flex:1}}></div>
    <Group h={rem(250)} w="100%" justify='flex-end' pr="lg">
      <ActionIcon variant="transparent" aria-label="Settings"  w={hands === "gu"   ? rem(150) : rem(130)} onClick={()=>setHands("gu")}>
        <Image src="/images/svg/card_gu.svg"  style={{...hands === "gu"     && {border:"2px solid #E26EE5", borderRadius:15 }}}/>
      </ActionIcon>
      <ActionIcon variant="transparent" aria-label="Settings" w={hands === "choki" ? rem(150) : rem(130)} onClick={()=>setHands("choki")}>
      <Image src="/images/svg/card_choki.svg" style={{...hands === "choki"  && {border:"2px solid #E26EE5", borderRadius:15 }}}/>
      </ActionIcon>
      <ActionIcon variant="transparent" aria-label="Settings" w={hands === "pa"    ? rem(150) : rem(130)} onClick={()=>setHands("pa")}>
      <Image src="/images/svg/card_pa.svg"    style={{...hands === "pa"     && {border:"2px solid #E26EE5", borderRadius:15 }}}/>
      </ActionIcon>
    </Group>
    <Group w="100%" justify='flex-end' pr="lg">
      <Button size="lg" w={rem(440)} color="dark" fullWidth>決定</Button>
    </Group>
    </Flex>
    </>
  )
}
