import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, ScrollView } from '@gluestack-ui/themed';
import { Platform } from 'react-native';

// Component that enables scrolling and keyboard avoidance, ie for forms
export default function ScrollableView({ children }: { children?: ReactNode }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      flex={1}>
      <ScrollView flex={1}>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
}
