import React from 'react';
import { VStack, Spinner } from '@gluestack-ui/themed';
import palette from '../constants/palette';

export interface LoadingProps {
  isLoading: boolean;
  children: React.JSX.Element | React.JSX.Element[];
  flex?: number;
}

// Nicer way to indicate that we're still loading data...
export const Loading = ({
  isLoading,
  children,
  ...rest
}: LoadingProps): React.JSX.Element => {
  if (isLoading) {
    return (
      <VStack
        backgroundColor={'white'}
        flex={1}
        alignItems={'center'}
        justifyContent={'center'}
        {...rest}>
        <Spinner size="large" color={palette.primary} />
      </VStack>
    );
  } else {
    return <VStack flex={1}>{children}</VStack>;
  }
};
