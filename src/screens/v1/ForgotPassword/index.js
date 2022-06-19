import React, {useCallback, useEffect, useRef} from 'react';
import {View, KeyboardAvoidingView, TouchableOpacity, Text} from 'react-native';
import {
  InputV1,
  TypographyV1,
  ButtonV1,
  SocialMediaListV1,
  BackgroundTopV1,
} from '@components';
import {Container, Row} from '@layout';
import Routes from '@routes';
import SvgIcons from '@assets/SvgIcons';

const Index = props => {
  const {navigation} = props;
  const refInput = useRef();

  useEffect(() => {
    refInput.current.focus();
  }, []);

  const handlePressSend = useCallback(() => {
    navigation.navigate(Routes.OtpScreen);
  }, []);

  return (
    <Container>
      <Row>
        <BackgroundTopV1 title="Ganti Kata Sandi" isHeader={true} />
      </Row>

      <Row marginHorizontal={1.5}>
        <Row marginTop="3">
          <InputV1
            refInput={refInput}
            leftImage={<SvgIcons.EmailBoldGray />}
            placeholder="email"
            // value={username}
            // onChangeText={value => handleChangeTextInput('username', value)}
            // returnKeyType="next"
          />
        </Row>

        <Row marginTop="3">
          <ButtonV1 variant="primary" size="block" onPress={handlePressSend}>
            Lanjut
          </ButtonV1>
        </Row>
      </Row>
    </Container>
  );
};

export default Index;
