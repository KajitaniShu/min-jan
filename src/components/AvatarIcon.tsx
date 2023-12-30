import React, { useState, useEffect } from 'react'
import { Avatar } from '@mantine/core';
import { getGltfImage } from '../config/getGltfImage'

export function AvatarIcon({color, size, src, ...props}: any) {
  const [base64Image, setBase64Image] = useState(null);

    useEffect(() => {
      getGltfImage(src).then((image:any) => {
            setBase64Image(image);
        }).catch(error => {
            console.error('An error occurred:', error);
        });
    }, [src]);

  return (
    <Avatar 
      bg="rgba(10,10,10,0.3)"
      {...props}
      src={base64Image}
      color={color}
      alt="icon" 
      variant="white"
      radius="xl"
      size={size}
      style={{border: "2px solid #EAEAEA"}}
    />
  )
}
