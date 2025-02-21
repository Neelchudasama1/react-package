import React from 'react';
import { Image } from '@gluestack-ui/themed';

export default function Logo(props: any) {
  return (
    <Image
      source={require('../assets/XplorTechLogo.png')}
      resizeMode="contain"
      w={props.w || props.width || '100%'}
      alignSelf={'center'}
      alt="Logo"
    />
  );
}
