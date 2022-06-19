import styled, {css} from 'styled-components/native';
import colors from '@assets/colors';
import {normalize, hp, wp} from '@utils/responsiveScreen';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${props =>
    props.background === 'white' ? '#fff' : 'transparent'};
  padding-vertical: ${hp(1)}px;
  width: 100%;
  ${props =>
    props.paddingHorizontal &&
    css`
      padding-horizontal: ${hp(props.paddingHorizontal)}px;
    `}
`;

export const Title = styled.Text`
  font-size: ${normalize(14)}px;
  font-family: Poppins-Bold;
  color: ${props =>
    props.textColorHeader ? props.textColorHeader : colors.black};
`;
