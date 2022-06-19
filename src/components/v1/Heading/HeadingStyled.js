import styled, {css} from 'styled-components/native';
import {
  hp,
  wp,
  normalize,
  isIOS,
  isX,
  isAndroid,
} from '@utils/responsiveScreen';

export const Container = styled.View`
  /* background-color: red; */
  padding-horizontal: ${hp(1.5)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftArea = styled.View`
  width: 70%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  /* background-color: blue; */
`;

export const RightArea = styled.View`
  width: 25%;
  height: 100%;
  /* background-color: blue; */
  ${props =>
    props.typeRightArea === 'action' &&
    css`
      flex-direction: row;
      justify-content: flex-end;
      /* align-items: center; */
    `}
`;
