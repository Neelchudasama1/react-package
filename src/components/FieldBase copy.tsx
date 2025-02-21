import React from 'react';
import { View } from '@gluestack-ui/themed';
import { ErrorMessage } from 'formik';
import { PropsWithChildren } from 'react';
import ErrorText from './ErrorText';

export type FieldBaseProps = {
  name: string;
  placeholder?: string;
  label?: string;
};

export default function FieldBase({
  name,
  children,
}: PropsWithChildren<FieldBaseProps>) {
  return (
    <View>
      {children}
      <ErrorMessage
        render={msg => <ErrorText name="Error" text={msg} />}
        name={name}
      />
    </View>
  );
}
