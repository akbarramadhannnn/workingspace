import styled, {css} from 'styled-components/native';
import {
  hp,
  wp,
  normalize,
  isIOS,
  isX,
  isAndroid,
} from '@utils/responsiveScreen';
import colors from '@assets/colors';

export const Button = styled.Pressable`
  ${props =>
    props.size === 'block' &&
    props.variant === 'primary' &&
    css`
      width: 100%;
      background: ${colors.primary};
      padding-vertical: ${isAndroid ? `${hp(2)}px` : `${hp(1.5)}px`};
      border-radius: ${wp(3)}px;
      align-items: center;
      justify-content: center;
    `}
`;

export const Text = styled.Text`
  ${props =>
    props.size === 'block' &&
    props.variant === 'primary' &&
    css`
      font-family: poppins-medium;
      color: #fff;
      font-size: ${normalize(18)}px;
    `}
`;
