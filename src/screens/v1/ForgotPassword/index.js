import React from 'react';
import {View, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {
  InputV1,
  TypographyV1,
  ButtonV1,
  SocialMediaListV1,
  BackgroundTopV1,
} from '@components';
import {Container, Row} from '@layout';

const Index = () => {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.select({
          ios: 0,
          android: 200,
        })}>
        <Row>
          <BackgroundTopV1 title="Ganti Kata Sandi" />
        </Row>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Index;
