import React, { useCallback } from 'react';
import { Input, InputField, Text } from '@gluestack-ui/themed';
import FieldBase, { FieldBaseProps } from './FieldBase';
import { TextInputProps } from 'react-native';
import { useField } from 'formik';
interface TextFieldProps extends TextInputProps, FieldBaseProps {
  name: string;
  darkMode?: boolean;
  borderColor?: string;
  borderWidth?: number;
  placeholder?: string;
  label?: string;
}

export default function TextField({
  name,
  darkMode,
  borderColor,
  borderWidth,
  placeholder,
  label,
  ...rest
}: TextFieldProps & React.ComponentPropsWithoutRef<typeof InputField>) {
  const [_, meta, helpers] = useField(name);

  const handleChange = useCallback(
    (new_text: string) => {
      helpers.setValue(new_text);
    },
    [helpers],
  );

  return (
    <FieldBase name={name} placeholder={placeholder}>
      {label ? (
        <Text paddingBottom={2} color={!darkMode ? '$white' : '$black'}>
          {label}
        </Text>
      ) : null}
      <Input
        borderColor={borderColor || '$black'}
        $focus={{ borderColor: '#25222D' }}
        borderWidth={borderWidth || 1}
        // variant={'outline'}
        isInvalid={false}
        isDisabled={false}>
        <InputField
          onChangeText={handleChange}
          value={meta.value}
          placeholder={placeholder}
          {...rest}
        />
      </Input>
    </FieldBase>
  );
}
