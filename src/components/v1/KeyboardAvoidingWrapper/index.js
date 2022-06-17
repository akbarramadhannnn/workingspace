import React, {memo} from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';

const KeyboardAvoidingWrapper = ({children}) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};

export default memo(KeyboardAvoidingWrapper);
