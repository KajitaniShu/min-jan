import React, { useMemo } from 'react'
import { Avatar } from '@mantine/core';
import multiavatar from '@multiavatar/multiavatar'

export function AvatarIcon({color, size, ...props}: any) {
  
  return (
    <Avatar 
    {...props}
      bg={color}
      alt="icon" 
      variant="light" 
      radius="xl" 
      size={size}
      style={{border: "2px solid #ECE8E8"}}
    />
  )
}
