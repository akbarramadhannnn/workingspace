import React, {memo} from 'react';
import {KeyboardAvoidingView} from 'react-native';

const KeyboardAvoidingWrapper = ({children}) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'height' : 'height'}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default memo(KeyboardAvoidingWrapper);
