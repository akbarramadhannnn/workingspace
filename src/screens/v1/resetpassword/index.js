import React, {useCallback} from 'react';
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

const Index = props => {
  const {navigation} = props;

  const handlePressSend = useCallback(() => {
    navigation.navigate(Routes.SignInScreen);
  }, []);

  return (
    <Container>
      <Row>
        <BackgroundTopV1 title="Kata Sandi Baru" isHeader={true} />
      </Row>

      <Row marginTop={3} marginHorizontal={1.5}>
        <Row>
          <InputV1
            label="Password Baru"
            leftImage={require('@assets/images/Lock.png')}
            placeholder="masukkan password baru"
            // value={username}
            // onChangeText={value => handleChangeTextInput('username', value)}
            // returnKeyType="next"
          />
        </Row>

        <Row marginTop={3}>
          <InputV1
            label="Konfirmasi Password Baru"
            leftImage={require('@assets/images/Lock.png')}
            placeholder="masukkan konfirmasi password baru"
            // value={username}
            // onChangeText={value => handleChangeTextInput('username', value)}
            // returnKeyType="next"
          />
        </Row>

        <Row marginTop={3}>
          <ButtonV1 variant="primary" size="block" onPress={handlePressSend}>
            Simpan
          </ButtonV1>
        </Row>
      </Row>

      {/* <KeyboardAvoidingView
          style={{
            flex: 1,
          }}
          behavior="height"
          enabled>
          <Row flex={1} paddingBottom={1.5}>
            <Row
              flex={1}
              marginHorizontal={1.5}
              alignItems="flex-end"
              flexDirection="row">
              <ButtonV1
                variant="primary"
                size="block"
                onPress={handlePressSend}>
                Simpan
              </ButtonV1>
            </Row>
          </Row>
        </KeyboardAvoidingView> */}
    </Container>
  );
};

export default Index;
