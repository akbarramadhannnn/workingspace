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
      color: ${colors.primary};
    `}

  ${props =>
    props.type === 'text' &&
    css`
      font-size: ${normalize(14)}px;
      font-family: Poppins-Medium;
      color: ${colors.textcolor};
    `}

  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
`;
