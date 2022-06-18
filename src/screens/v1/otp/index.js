import React, {useCallback, useState, useRef, useEffect, useMemo} from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {InputV1, TypographyV1, ButtonV1, BackgroundTopV1} from '@components';
import {Container, Row} from '@layout';
import Routes from '@routes';

const Index = props => {
  const {navigation} = props;
  const [second, setSecond] = useState(60);
  const refInput = useRef({});
  const [otpValue, setOtpValue] = useState([
    {
      value: '',
      name: 'input1',
    },
    {
      value: '',
      name: 'input2',
    },
    {
      value: '',
      name: 'input3',
    },
    {
      value: '',
      name: 'input4',
    },
  ]);

  useEffect(() => {
    let timeout;
    if (second > 0) {
      timeout = setTimeout(() => setSecond(second - 1), 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  });

  useEffect(() => {
    refInput.current[otpValue[0].name].focus();
  }, []);

  const handleChangeInput = useCallback(
    (value, i) => {
      let name;
      if (value) {
        const getName = otpValue[i + 1];
        if (getName) {
          name = getName.name;
        } else {
          name = otpValue[i].name;
        }
      } else {
        const getName = otpValue[i - 1];
        if (getName) {
          name = getName.name;
        } else {
          name = otpValue[i].name;
        }
      }
      const oldState = [...otpValue];
      oldState[i].value = value;
      setOtpValue(oldState);
      refInput.current[name].focus();
    },
    [refInput, otpValue],
  );

  const isDisabledButton = useMemo(() => {
    const filterOtp = otpValue.filter(d => d.value === '');
    if (filterOtp.length > 0) {
      return true;
    } else {
      return false;
    }
  }, [otpValue]);

  const handlePressResentOTP = useCallback(() => {
    setSecond(60);
  }, []);

  const handlePressSentOTP = useCallback(() => {
    navigation.navigate(Routes.ResetPasswordScreen);
  }, [navigation]);

  return (
    <Container>
      <Row>
        <BackgroundTopV1 title="Verifikasi OTP" isHeader={true} />
      </Row>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Row marginHorizontal={1.5}>
          <Row marginTop={3}>
            <Row flexDirection="row" justifyContent="space-between">
              {otpValue.map((d, i) => (
                <Row key={i} width={80}>
                  <InputV1
                    refInput={refInput}
                    type="otp"
                    key={i}
                    value={d.value}
                    onChangeText={value => handleChangeInput(value, i)}
                    length={otpValue.length}
                    index={i}
                    name={d.name}
                  />
                </Row>
              ))}
            </Row>

            {second > 0 ? (
              <Row marginTop={3} flexDirection="row" justifyContent="center">
                <TypographyV1 type="text" textAlign="center">
                  Mohon tunggu dalam{' '}
                </TypographyV1>
                <TypographyV1 type="text" textAlign="center" variant="primary">
                  {second} detik{' '}
                </TypographyV1>
                <TypographyV1 type="text" textAlign="center">
                  untuk kirim ulang
                </TypographyV1>
              </Row>
            ) : (
              <Row marginTop={3} flexDirection="row" justifyContent="center">
                <TypographyV1 type="text" textAlign="center">
                  Tidak menerima kode OTP ?{' '}
                </TypographyV1>
                <TypographyV1
                  type="link"
                  textAlign="center"
                  onPressLink={handlePressResentOTP}>
                  Kirim ulang
                </TypographyV1>
              </Row>
            )}
          </Row>

          <Row marginTop={3}>
            <ButtonV1
              variant="primary"
              size="block"
              isDisabled={isDisabledButton}
              onPress={handlePressSentOTP}>
              Kirim
            </ButtonV1>
          </Row>

          {/* <Row height="13">
            <Row
              flex={1}
              marginHorizontal={1.5}
              alignItems="center"
              flexDirection="row">
              <ButtonV1
                variant="primary"
                size="block"
                isDisabled={isDisabledButton}
                onPress={handlePressSentOTP}>
                Kirim
              </ButtonV1>
            </Row>
          </Row> */}
        </Row>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default Index;
