import { Text } from '@gluestack-ui/themed';
import { ErrorMessageProps } from 'formik';
import React from 'react';

export default function ErrorText({
  text,
}: ErrorMessageProps & { text: string }) {
  return (
    <Text color="red" fontSize={12}>
      {text}
    </Text>
  );
}
