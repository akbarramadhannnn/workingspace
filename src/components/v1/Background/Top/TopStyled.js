import styled from 'styled-components/native';
import colors from '@assets/colors';
import {wp, hp, normalize} from '@utils/responsiveScreen';

export const Container = styled.View`
  width: 100%;
  background-color: ${colors.primary};
  height: ${wp(45)}px;
  padding-horizontal: ${hp(1.8)}px;
  padding-vertical: ${hp(1)}px;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Text = styled.Text`
  color: #fff;
  font-family: Poppins-Bold;
  font-size: ${normalize(24)}px;
`;
