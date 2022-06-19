import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';
import colors from '@assets/colors';
import {wp, hp, normalize} from '@utils/responsiveScreen';

const {width, height} = Dimensions.get('screen');

export const Container = styled.View`
  border-radius: ${wp(3)}px;
  ${props =>
    props.isFocus &&
    css`
      border-width: 0.8px;
      border-color: ${colors.accentViolet.primary};
    `}

  flex-direction: row;
  align-items: center;
  height: ${width * 0.14}px;
  background-color: ${props =>
    props.isFocus ? colors.accentViolet.quaternary : colors.background.darken};
`;

export const JustifyContent = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: ${wp(3)}px;
  height: 100%;
  width: ${wp(10)}px;
  background-color: transparent;
`;

export const TextInputWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: transparent;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  height: 100%;
  padding: 0px;
  font-size: ${normalize(13)}px;
  font-family: Poppins-Medium;
  color: ${colors.greyscale.textPrimary};
  background-color: transparent;
`;

export const OtpTextInput = styled.TextInput`
  width: 100%;
  padding: 0px;
  font-size: ${normalize(20)}px;
  font-family: Poppins-Medium;
  color: ${colors.greyscale.textPrimary};
  align-content: center;
  text-align: center;
`;
