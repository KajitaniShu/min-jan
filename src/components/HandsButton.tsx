import React, { useState } from 'react'
import { Button, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';


export function HandsButton({hands, setHands, close}: any) {
  
  return (
    <>
      <Text size="sm" fw="bold" c="dark" mb="md">次の手を選んでください</Text>
      <Button variant="filled" radius="xl" mb="sm" color={hands === "gu"    ? "gray.9" : "gray.4"} fullWidth onClick={()=> {close(); setHands("gu")}}>グー</Button>
      <Button variant="filled" radius="xl" mb="sm" color={hands === "choki" ? "gray.9" : "gray.4"} fullWidth onClick={()=> {close(); setHands("choki")}}>チョキ</Button>
      <Button variant="filled" radius="xl" mb="sm" color={hands === "pa"    ? "gray.9" : "gray.4"} fullWidth onClick={()=> {close(); setHands("pa")}}>パー</Button>
    </>
  )
}
