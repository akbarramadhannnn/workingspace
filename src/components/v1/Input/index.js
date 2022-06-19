import React, {memo, useCallback, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {TypographyV1} from '@components';
import {
  Container,
  JustifyContent,
  TextInputWrapper,
  TextInput,
  OtpTextInput,
} from './InputStyled';

const Index = ({
  leftImage,
  placeholder = '',
  rightImage,
  onPressRight = () => {},
  value = '',
  onChangeText = () => {},
  secureTextEntry = false,
  returnKeyType = 'next',
  type = '',
  refInput,
  name,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleOnFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  return (
    <Container isFocus={isFocus}>
      {leftImage && <JustifyContent>{leftImage}</JustifyContent>}

      {type === 'otp' ? (
        <OtpTextInput
          ref={el => (refInput.current[name] = el)}
          keyboardType="number-pad"
          placeholder={placeholder}
          value={value}
          onChangeText={value => onChangeText(value)}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          placeholderTextColor={'#747474'}
          maxLength={1}
        />
      ) : (
        <TextInputWrapper>
          <TextInput
            ref={refInput}
            placeholder={placeholder}
            value={value}
            onChangeText={value => onChangeText(value)}
            secureTextEntry={secureTextEntry}
            returnKeyType={returnKeyType}
            placeholderTextColor={'#747474'}
            autoFocus={isFocus}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
        </TextInputWrapper>
      )}

      {rightImage && (
        <JustifyContent>
          <TouchableOpacity onPress={onPressRight}>
            {rightImage}
          </TouchableOpacity>
        </JustifyContent>
      )}
    </Container>
  );
};

export default memo(Index);
