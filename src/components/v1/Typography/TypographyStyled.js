import styled, {css} from 'styled-components/native';
import {wp, hp, normalize} from '@utils/responsiveScreen';
import colors from '@assets/colors';

export const Text = styled.Text`
  ${props =>
    props.type === 'label' &&
    css`
      font-size: ${normalize(12)}px;
      font-family: Poppins-Regular;
      color: ${colors.lightViolet};
    `}

  ${props =>
    props.type === 'link' &&
    css`
      font-size: ${normalize(14)}px;
      font-family: Poppins-Medium;
      color: ${props.isDisabled
        ? colors.lightgrey
        : colors.accentViolet.primary};
    `}

  ${props =>
    props.type === 'text' &&
    css`
      font-size: ${normalize(14)}px;
      font-family: Poppins-Medium;
      color: ${props =>
        props.variant === 'primary'
          ? colors.accentViolet.primary
          : props.variant === 'secondary'
          ? colors.greyscale.textSecondary
          : props.variant === 'tertiary'
          ? colors.greyscale.textTertiary
          : colors.greyscale.textPrimary};
    `}

    ${props =>
    props.type === 'title' &&
    css`
      font-size: ${normalize(16)}px;
      font-family: Poppins-Bold;
      font-weight: 700;
      color: ${colors.greyscale.textPrimary};
    `}

  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
`;
