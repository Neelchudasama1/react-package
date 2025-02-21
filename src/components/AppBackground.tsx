import React, {ReactNode} from 'react';
import {ImageBackground} from '@gluestack-ui/themed';
import {StyleSheet} from 'react-native';

// Component that wraps content with background image
function AppBackground({children}: {children?: ReactNode}) {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../assets/DeliveryConnect-Background.png')}
      alt="login-background"
      style={styles.container}
      imageStyle={styles.image}>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: '100%',
  },
});

export default AppBackground;
