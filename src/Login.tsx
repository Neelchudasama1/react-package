/* eslint react/jsx-max-depth:0 */ // placing this here as formik handles the UI differently and we cant change much there.
import {
  Button,
  ButtonText,
  Heading,
  HStack,
  VStack,
  View,
} from '@gluestack-ui/themed';
import * as yup from 'yup';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import ScrollableView from './components/ScrollableView';
import RememberMe from './components/RememberMe';
import AppBackground from './components/AppBackground';
import SettingsMenu from './components/SettingsMenu';
import TextField from './components/TextField';
import Logo from './components/Logo';

type FormValues = {
  account: string;
  userName: string;
  password: string;
};
const validationSchema = yup.object().shape({
  account: yup.string().required('Account is required'),
  userName: yup.string().required('User Name is required'),
  password: yup.string().required('Password is required'),
});

const UserLoginScreen = () => {
  const [isRememberMe, setRememberMe] = useState(true);
  const [initialValues, setInitialValues] = useState<FormValues>({
    account: 'AA',
    userName: 'CCCCCC',
    password: '',
  });

  useEffect(() => {
    const initialize = async () => {
      let savedAccount = '';
      let savedUserName = '';

      setInitialValues({
        account: 'AA',
        userName: 'savedUserName',
        password: '',
      });
    };

    initialize();
  }, []);

  return (
    <VStack flex={1}>
      <AppBackground>
        <ScrollableView>
          <View px={'$8'} flex={1}>
            <HStack
              py={'$8'}
              px={'$2'}
              alignItems={'center'}
              w={'100%'}
              justifyContent={'space-around'}>
              <Logo />
              <SettingsMenu dark={false} testID="loginScreen" />
            </HStack>

            <Heading
              alignSelf="center"
              mb={'$5'}
              color="white"
              testID="loginScreen-title">
              User Login
            </Heading>

            <Formik
              initialValues={initialValues}
              onSubmit={() => {}}
              validationSchema={validationSchema}>
              {formik => (
                <VStack gap={'$6'}>
                  <TextField
                    height={'$10'}
                    testID="loginScreen-accountInputField"
                    color={'$white'}
                    borderColor={'$white'}
                    name="account"
                    label="Account"
                    placeholder="Account"
                    autoCorrect={false}
                    autoCapitalize="none"
                  />
                  <TextField
                    height={'$10'}
                    testID="loginScreen-usernameInputField"
                    color={'$white'}
                    borderColor={'$white'}
                    name="userName"
                    label="User Name"
                    placeholder="User Name"
                    autoCorrect={false}
                    autoCapitalize="none"
                  />
                  <TextField
                    height={'$10'}
                    testID="loginScreen-passwordInputField"
                    color={'$white'}
                    borderColor={'$white'}
                    name="password"
                    label="Password or PIN"
                    placeholder="Password or PIN"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                  />
                  <RememberMe
                    isRememberMe={isRememberMe}
                    onToggle={setRememberMe}
                  />
                  <Button
                    testID="loginScreen-loginButton"
                    action={'primary'}
                    variant={'solid'}
                    bgColor="$violet600"
                    size={'md'}
                    rounded={'$full'}
                    isDisabled={
                      !formik.isValid || formik.values === initialValues
                    }
                    onPress={() => formik.submitForm()}>
                    <ButtonText>Login</ButtonText>
                  </Button>
                </VStack>
              )}
            </Formik>
          </View>
        </ScrollableView>
      </AppBackground>
    </VStack>
  );
};

export default UserLoginScreen;
