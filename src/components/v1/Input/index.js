import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {TypographyV1} from '@components';
import {
  Container,
  JustifyContent,
  LeftImage,
  Divider,
  TextInputWrapper,
  TextInput,
  RightImage,
} from './InputStyled';

const Index = ({
  leftImage,
  placeholder = '',
  label = '',
  rightImage,
  onPressRight = () => {},
  value = '',
  onChangeText = () => {},
  secureTextEntry = false,
  returnKeyType = 'next',
}) => {
  return (
    <Container>
      {leftImage && (
        <JustifyContent>
          <LeftImage source={leftImage} resizeMode="stretch" />
          <Divider />
        </JustifyContent>
      )}

      <TextInputWrapper>
        <TypographyV1 type="label">{label}</TypographyV1>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={value => onChangeText(value)}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          placeholderTextColor={Platform.OS == 'android' ? '#d3d3d3' : null}
        />
      </TextInputWrapper>

      {rightImage && (
        <JustifyContent>
          <TouchableOpacity onPress={onPressRight}>
            <RightImage source={rightImage} resizeMode="stretch" />
          </TouchableOpacity>
        </JustifyContent>
      )}
    </Container>
  );
};

export default memo(Index);
