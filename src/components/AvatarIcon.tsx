import React, { useMemo } from 'react'
import { Avatar } from '@mantine/core';
import multiavatar from '@multiavatar/multiavatar'

export function AvatarIcon({avatarCode, avatarColor, size, ...props}: any) {
  const svgString = useMemo(() => {
    const input =  multiavatar(avatarCode, true);
    const svgDataBase64 = btoa(unescape(encodeURIComponent(input)));
    return svgDataBase64
  }, [avatarCode])
  return (
    <Avatar 
    {...props}
      src={`data:image/svg+xml;charset=utf-8;base64, ${svgString}`} 
      bg={avatarColor}
      alt="icon" 
      variant="light" 
      radius="xl" 
      size={size}
      style={{border: "2px solid #ECE8E8"}}
    />
  )
}
