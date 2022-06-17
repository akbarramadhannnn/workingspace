import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import colors from '@assets/colors';
import {wp, hp, normalize} from '@utils/responsiveScreen';

const {width, height} = Dimensions.get('screen');

export const Container = styled.View`
  border-radius: ${wp(3)}px;
  border-width: 0.5px;
  border-color: ${colors.lightgrey};
  flex-direction: row;
  align-items: center;
  height: ${width * 0.14}px;
`;

export const JustifyContent = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const LeftImage = styled.Image`
  width: ${width * 0.060}px;
  height: ${width * 0.055}px;
  margin-horizontal: ${hp(1.5)}px;
  margin-vertical: ${hp(2)}px;
  tint-color: ${colors.primary};
`;

export const Divider = styled.View`
  height: ${height * 0.06}px;
  padding-vertical: ${hp(1)}px;
  margin-right: ${hp(1)}px;
  width: 1px;
  background-color: ${colors.lightgrey};
`;

export const TextInputWrapper = styled.View`
  margin-horizontal: ${wp(2)}px;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  height: ${width * 0.12}px;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  padding: 0px;
  font-size: ${normalize(13)}px;
  font-family: Poppins-Medium;
  color: #747474;
`;

export const RightImage = styled.Image`
  width: ${wp(6.5)}px;
  height: ${hp(3)}px;
  margin-right: ${wp(3.5)}px;
  margin-top: ${hp(0.5)}px;
  opacity: 0.3;
  tint-color: #000;
`;
