import React from 'react';
import { Pressable, View, Text, HStack } from '@gluestack-ui/themed';

type RememberMeProps = {
  isRememberMe: boolean;
  onToggle: (checked: boolean) => void;
};

const RememberMe = ({ isRememberMe, onToggle }: RememberMeProps) => {
  return (
    <HStack alignItems="center" mb={'$3'}>
      <Pressable
        onPress={() => onToggle(!isRememberMe)}
        testID="loginScreen-rememberMeCheckbox"
        flexDirection="row"
        alignItems="center">
        <View
          w={'$5'}
          h={'$5'}
          bgColor={'$violet600'}
          rounded={'$xs'}
          mr={'$3'}
          justifyContent="center"
          alignItems="center">
          {isRememberMe && (
            <Text color="white" fontSize={'$sm'}>
              ✓
            </Text>
          )}
        </View>
        <Text color="white" testID="loginScreen-rememberMeText">
          Remember me
        </Text>
      </Pressable>
    </HStack>
  );
};

export default RememberMe;
