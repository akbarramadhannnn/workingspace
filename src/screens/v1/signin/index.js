import React, {useState, useCallback} from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import {
  InputV1,
  TypographyV1,
  ButtonV1,
  SocialMediaListV1,
  BackgroundTopV1,
  KeyboardAvoidingWrapperV1,
} from '@components';
import {Container, Row} from '@layout';
import Routes from '@routes';

const Index = props => {
  const {navigation} = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const handleChangeTextInput = useCallback((params, value) => {
    if (params === 'username') {
      setUsername(value);
    } else if (params === 'password') {
      setPassword(value);
    }
  }, []);

  const handleHidePassword = useCallback(() => {
    setHidePassword(!hidePassword);
  }, [hidePassword]);

  const handlePressForgotPassword = useCallback(() => {
    navigation.navigate(Routes.ForgotPasswordScreen);
  }, [navigation]);

  const handlePressSignUp = useCallback(() => {
    navigation.navigate(Routes.SignUpScreen);
  }, [navigation]);

  return (
    <Container>
      <Row>
        <BackgroundTopV1 title="Masuk" />
      </Row>

      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        enabled>
        <Row
          flex={1}
          marginHorizontal={1.5}
          paddingTop={4}
          paddingBottom={2}
          flexDirection="column"
          justifyContent="space-between">
          <Row>
            <Row marginBottom={3}>
              <InputV1
                label="Nama Pengguna atau Email"
                leftImage={require('@assets/images/Person.png')}
                placeholder="masukkan nama pengguna atau email"
                value={username}
                onChangeText={value => handleChangeTextInput('username', value)}
                returnKeyType="next"
              />
            </Row>

            <Row marginBottom={2}>
              <InputV1
                label="Kata Sandi"
                leftImage={require('@assets/images/Lock.png')}
                rightImage={
                  hidePassword
                    ? require('@assets/images/eyeoff.png')
                    : require('@assets/images/eye.png')
                }
                placeholder="masukkan kata sandi"
                value={password}
                onChangeText={value => handleChangeTextInput('password', value)}
                secureTextEntry={hidePassword}
                returnKeyType="done"
                onPressRight={handleHidePassword}
              />
            </Row>

            <Row flexDirection="row" justifyContent="flex-end">
              <TypographyV1 type="link" onPressLink={handlePressForgotPassword}>
                Lupa Kata Sandi?
              </TypographyV1>
            </Row>
          </Row>

          <Row>
            <ButtonV1 variant="primary" size="block">
              Masuk
            </ButtonV1>
          </Row>

          <Row>
            <Row
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  height: 0.4,
                  backgroundColor: '#d3d3d3',
                  marginRight: 10,
                }}
              />
              <TypographyV1 type="text" textAlign="center" variant="secondary">
                Atau
              </TypographyV1>
              <View
                style={{
                  flex: 1,
                  height: 0.4,
                  backgroundColor: '#d3d3d3',
                  marginLeft: 10,
                }}
              />
            </Row>
          </Row>

          <Row>
            <SocialMediaListV1 />
          </Row>

          <Row flexDirection="row" justifyContent="center">
            <TypographyV1 type="text" textAlign="center">
              Belum mempunyai akun ?{' '}
            </TypographyV1>
            <TypographyV1
              type="link"
              textAlign="center"
              onPressLink={handlePressSignUp}>
              Daftar Disini
            </TypographyV1>
          </Row>
        </Row>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Index;
