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
        <Row marginHorizontal={12}>
          <Row marginTop={3}>
            <InputV1
              label="Nama Lengkap"
              leftImage={require('@assets/images/Fullname-1.png')}
              placeholder="masukkan nama lengkap"
              value={fullName}
              onChangeText={value => handleChangeTextInput('fullname', value)}
              returnKeyType="next"
            />
          </Row>

          <Row marginTop={3}>
            <InputV1
              label="Alamat Email"
              leftImage={require('@assets/images/Message.png')}
              placeholder="masukkan alamat email"
              value={email}
              onChangeText={value => handleChangeTextInput('email', value)}
              returnKeyType="next"
            />
          </Row>

          <Row marginTop={3}>
            <InputV1
              label="Nama Pengguna"
              leftImage={require('@assets/images/Person.png')}
              placeholder="masukkan nama pengguna"
              value={username}
              onChangeText={value => handleChangeTextInput('username', value)}
              returnKeyType="next"
            />
          </Row>

          <Row marginTop={3}>
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
