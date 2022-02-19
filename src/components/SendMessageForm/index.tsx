import React, { useState } from 'react';

import {
  View,
  TextInput
} from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){
  
  const [ message, setMessage ] = useState('');
  const [ sendingMessage, setSendingMessage ] = useState(false);
  
  return (
    <View style={styles.container}>

      <TextInput 
      keyboardAppearance='dark'
      placeholder="Qual sua expectativa para o evento?"
      placeholderTextColor={COLORS.GRAY_PRIMARY}
      multiline
      onChangeText={setMessage}
      value={message}
      maxLength={140}
      style={styles.input} 
      editable={!sendingMessage}
      />

      <Button 
        title="ENVIAR MENSAGEM"
        color={COLORS.WHITE}
        backgroundColor={COLORS.PINK}
      />
    </View>
  );
}