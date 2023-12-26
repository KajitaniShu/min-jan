import React, { useState } from 'react'
import { Divider, Group, Text, Stack, Flex, Image, ActionIcon, Overlay, Button, Anchor, rem} from '@mantine/core';

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
    <Group h={rem(250)} w={rem(500)} justify='center'>
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
    </Flex>
    </>
  )
}
