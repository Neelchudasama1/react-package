
import React, { useState } from 'react';
import { Button, ButtonText } from '@gluestack-ui/themed';
import StyledIcon from '../components/StyledIcon';
import ConfirmModal from '../components/ConfirmModal';
import BaseModal from '../components/BaseModal';

type SettingsModalProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

export const SettingsModal = function SettingsModal({
  isOpen,
  onClose,
}: SettingsModalProps) {
  const [showConfirmClear, setShowConfirmClear] = useState(false);
  const [showConfirmRevokeLicense, setShowConfirmRevokeLicense] =
    useState(false);


  return (
    <BaseModal
      testIDTitle="settingsModal-title"
      testIDSecondary="settingsModal-cancelButton"
      isOpen={isOpen}
      title={'Settings'}
      secondary={'Cancel'}
      onSecondaryAction={() => {
        if (onClose) {
          onClose();
        }
      }}
      size="md">
      <Button
        testID="settingsModal-clearResetButton"
        justifyContent="flex-start"
        rounded={'$none'}
        variant="outline"
        borderColor="$backgroundDark200"
        borderWidth={'$0'}
        borderTopWidth={'$1'}
        gap={5}
        onPress={() => setShowConfirmClear(true)}>
        <StyledIcon name={'cog-outline'} color={'$black'} />
        <ButtonText color="$black" textAlign="left">
          Clear/Reset
        </ButtonText>
      </Button>

      {/* Confirm Modal for Clear/Reset */}
      <ConfirmModal
        testIDTitle="clearResetModal-title"
        testIDPrimary="clearResetModal-okButton"
        testIDSecondary="clearResetModal-cancelButton"
        title={'Clear/Reset'}
        size={'lg'}
        isOpen={showConfirmClear}
        message={
          'Are you sure you want to clear all data and reset application, your non synced data will be lost?'
        }
        onPrimaryAction={() => {
          // resetApp().then(() => {
          //   onClose(); // Close settingsModal as well
          // });
        }}
        secondary={'Cancel'}
        onSecondaryAction={() => {
          setShowConfirmClear(false);
        }}
      />

      {false && (
        <Button
          justifyContent="flex-start"
          rounded={'$none'}
          variant="outline"
          borderColor="$backgroundDark200"
          borderWidth={'$0'}
          borderTopWidth={'$1'}
          gap={5}
          onPress={() => setShowConfirmRevokeLicense(true)}>
          <StyledIcon name={'cog-outline'} color={'$black'} />
          <ButtonText color="$black" textAlign="left">
            Revoke License
          </ButtonText>
        </Button>
      )}

      {/* Confirm Modal for Revoke License */}
      <ConfirmModal
        title={'Revoke License'}
        isOpen={showConfirmRevokeLicense}
        message={'Are you sure you want to revoke your license?'}
        onPrimaryAction={() => {
          // revokeDeviceLicense().then(() => {
          //   setShowConfirmRevokeLicense(false);
          //   onClose();
          // });
        }}
        secondary={'Cancel'}
        onSecondaryAction={() => {
          setShowConfirmRevokeLicense(false);
        }}
      />
    </BaseModal>
  );
};

export default SettingsModal;
