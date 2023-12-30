import React, { useState } from 'react'
import { Divider, Paper, Group, Text, Card, Flex, Image, ActionIcon, Overlay, Button, Anchor, rem} from '@mantine/core';
import { setHand } from '../config/firebase'


export function PCSelect({roomId, uuid, round}: any) {
  const [hands, setHands] = useState<number>(0);
  
  return (
    <>
    <Card w={rem(560)} shadow="sm" radius="md">
      <Card.Section>
        <Group justify='center' w="100%" py="md" bg="#22A699">
          <Text c="white" fw="bold">手を選んでください</Text>
        </Group>
        <Divider c="dark" w="100%"/>
      </Card.Section>
      <Card.Section>
        <Group h={rem(250)} w="100%" justify='center' pr="lg" bg="#F5F5F5">
          <ActionIcon variant="transparent" aria-label="Settings"  w={hands === 0   ? rem(150) : rem(130)} onClick={()=>setHands(0)}>
            <Image src="/images/svg/card_gu.svg"  style={{...hands === 0     && {border:"4px solid #ccc", borderRadius:20 }}}/>
          </ActionIcon>
          <ActionIcon variant="transparent" aria-label="Settings" w={hands === 1 ? rem(150) : rem(130)} onClick={()=>setHands(1)}>
          <Image src="/images/svg/card_choki.svg" style={{...hands === 1  && {border:"4px solid #ccc", borderRadius:20 }}}/>
          </ActionIcon>
          <ActionIcon variant="transparent" aria-label="Settings" w={hands === 2    ? rem(150) : rem(130)} onClick={()=>setHands(2)}>
          <Image src="/images/svg/card_pa.svg"    style={{...hands === 2     && {border:"4px solid #ccc", borderRadius:20 }}}/>
          </ActionIcon>
        </Group>
      </Card.Section>
      
      <Card.Section>
      <Divider c="dark" w="100%"/>
        <Group justify='center' w="100%" py="sm">
          <Button size="lg" color="dark" onClick={()=>setHand(hands, uuid, roomId, round)}>
            <Text mx={rem(60)} size="lg" fw="bold">決定</Text>
          </Button>
        </Group>
      </Card.Section>  
      </Card>
    </>
  )
}
