import styled, {css} from 'styled-components/native';
import {hp} from '@utils/responsiveScreen';

const Row = styled.View`
  // flex: 1;
  position: relative;
  margin-bottom: ${props =>
    props.marginBottom ? `${hp(props.marginBottom)}px` : '0px'};
  margin-top: ${props =>
    props.marginTop ? `${hp(props.marginTop)}px` : '0px'};

  ${props =>
    props.marginHorizontal &&
    css`
      margin-horizontal: ${props.marginHorizontal}px;
    `}

  ${props =>
    props.flexDirection &&
    css`
      flex-direction: ${props.flexDirection};
    `}
  ${props =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}
`;

export default Row;
