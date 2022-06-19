import React, {useCallback, useState} from 'react';
import {
  InputV1,
  TypographyV1,
  ButtonV1,
  BackgroundTopV1,
  KeyboardAvoidingWrapperV1,
} from '@components';
import {Container, Row} from '@layout';
import Routes from '@routes';
import SvgIcons from '@assets/SvgIcons';

const Index = props => {
  const {navigation} = props;
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const handleChangeTextInput = useCallback((params, value) => {
    if (params === 'fullname') {
      setFullName(value);
    } else if (params === 'email') {
      setEmail(value);
    } else if (params === 'username') {
      setUsername(value);
    } else if (params === 'password') {
      setPassword(value);
    }
  }, []);

  const handleHidePassword = useCallback(() => {
    setHidePassword(!hidePassword);
  }, [hidePassword]);

  const handlePressSignIn = useCallback(() => {
    navigation.navigate(Routes.SignInScreen);
  }, [navigation]);

  return (
    <Container>
      <Row>
        <BackgroundTopV1 title="Daftar" isHeader={true} />
      </Row>
      <KeyboardAvoidingWrapperV1>
        <Row marginHorizontal={1.5}>
          <Row marginTop={3}>
            <InputV1
              leftImage={<SvgIcons.UserBoldGray />}
              placeholder="masukkan nama lengkap"
              value={fullName}
              onChangeText={value => handleChangeTextInput('fullname', value)}
              returnKeyType="next"
            />
          </Row>

          <Row marginTop={3}>
            <InputV1
              leftImage={<SvgIcons.EmailBoldGray />}
              placeholder="masukkan alamat email"
              value={email}
              onChangeText={value => handleChangeTextInput('email', value)}
              returnKeyType="next"
            />
          </Row>

          <Row marginTop={3}>
            <InputV1
              leftImage={<SvgIcons.UsernameBoldGray />}
              placeholder="masukkan username pengguna"
              value={username}
              onChangeText={value => handleChangeTextInput('username', value)}
              returnKeyType="next"
            />
          </Row>

          <Row marginTop={3}>
            <InputV1
              leftImage={<SvgIcons.LockBoldGray />}
              rightImage={
                hidePassword ? (
                  <SvgIcons.EyeCloseBoldGray />
                ) : (
                  <SvgIcons.EyeBoldGray />
                )
              }
              placeholder="masukkan kata sandi"
              value={password}
              onChangeText={value => handleChangeTextInput('password', value)}
              secureTextEntry={hidePassword}
              returnKeyType="done"
              onPressRight={handleHidePassword}
            />
          </Row>

          <Row marginTop={3}>
            <ButtonV1 variant="primary" size="block">
              Daftar
            </ButtonV1>
          </Row>

          <Row marginTop={3} flexDirection="row" justifyContent="center">
            <TypographyV1 type="text" textAlign="center">
              Sudah mempunyai akun ?{' '}
            </TypographyV1>
            <TypographyV1
              type="link"
              textAlign="center"
              onPressLink={handlePressSignIn}>
              Masuk Disini
            </TypographyV1>
          </Row>
        </Row>
      </KeyboardAvoidingWrapperV1>
    </Container>
  );
};

export default Index;
