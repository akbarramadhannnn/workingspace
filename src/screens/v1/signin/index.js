import React, {useState, useCallback} from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import {
  InputV1,
  TypographyV1,
  ButtonV1,
  SocialMediaListV1,
  BackgroundTopV1,
  DividersV1,
} from '@components';
import {Container, Row} from '@layout';
import Routes from '@routes';
import SvgIcons from '@assets/SvgIcons';

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

  const handlePressLogin = useCallback(() => {
    navigation.navigate(Routes.WorkingSpaceProfileScreen);
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
                leftImage={<SvgIcons.EmailBoldGray />}
                placeholder="email atau username"
                value={username}
                onChangeText={value => handleChangeTextInput('username', value)}
                returnKeyType="next"
              />
            </Row>

            <Row marginBottom={2}>
              <InputV1
                leftImage={<SvgIcons.LockBoldGray />}
                rightImage={
                  hidePassword ? (
                    <SvgIcons.EyeCloseBoldGray />
                  ) : (
                    <SvgIcons.EyeBoldGray />
                  )
                }
                placeholder="kata sandi"
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
            <ButtonV1 variant="primary" size="block" onPress={handlePressLogin}>
              Masuk
            </ButtonV1>
          </Row>

          <Row>
            <DividersV1 text="atau" />
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
