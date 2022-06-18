import styled from 'styled-components/native';
import colors from '@assets/colors';
import {normalize, hp} from '@utils/responsiveScreen';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  backgroundColor: transparent;
  paddingVertical: ${hp(1)}px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${normalize(19)}px;
  font-family: Poppins-Bold;
  color: ${props =>
    props.textColorHeader ? props.textColorHeader : colors.black};
`;
