import React from 'react';

import { View } from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';
import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

export function SignInBox(){

  const { signIn, isSigning } = useAuth();

  return (
    <View style={styles.container}>
      
      <Button 
        title="ENTRAR COM GITHUB" 
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigning}
      />

    </View>
  );
}