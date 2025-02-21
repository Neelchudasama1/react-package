import React, {useState} from 'react';
import {Button, HStack} from '@gluestack-ui/themed';
import StyledIcon from './StyledIcon';
import SettingsModal from '../modal/SettingsModal';

type SettingsMenuProps = {
  dark: boolean;
  testID?: string;
};
export default function SettingsMenu({dark, testID}: SettingsMenuProps) {
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  return (
    <HStack>
      <Button
        testID={`${testID}-settingsButton`}
        variant="link"
        onPress={() => {
          setShowSettingsModal(true);
        }}>
        <StyledIcon
          name={'cog-outline'}
          color={!dark ? '$white' : '$primary900'}
          size={28}
        />
      </Button>

      <SettingsModal
        isOpen={showSettingsModal}
        onClose={() => {
          setShowSettingsModal(false);
        }}
      />
    </HStack>
  );
}
