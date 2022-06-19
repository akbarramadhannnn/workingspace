import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {
  hp,
  wp,
  normalize,
  isIOS,
  isX,
  isAndroid,
} from '@utils/responsiveScreen';
import colors from '@assets/colors';

const {width} = Dimensions.get('screen');

export const Image = styled.Image`
  /* width: ${width}px; */
  height: ${wp(60)}px;
  resize-mode: cover;
`;

export const DotWrapper = styled.View`
  position: absolute;
  bottom: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Dot = styled.View`
  width: ${props => (props.isActive ? `${wp(6.5)}px` : `${wp(2.5)}px`)};
  height: ${wp(2.5)}px;
  border-radius: 30px;
  background-color: ${props =>
    props.isActive ? colors.accentViolet.secondary : colors.greyscale.dividers};
  margin-right: ${wp(1.5)}px;
  margin-bottom: ${wp(2.5)}px;
`;
