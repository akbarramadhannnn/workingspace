import styled, {css} from 'styled-components/native';
import {hp} from '@utils/responsiveScreen';

const Row = styled.View`
  position: relative;
  margin-bottom: ${props =>
    props.marginBottom ? `${hp(props.marginBottom)}px` : '0px'};
  margin-top: ${props =>
    props.marginTop ? `${hp(props.marginTop)}px` : '0px'};
  padding-top: ${props =>
    props.paddingTop ? `${hp(props.paddingTop)}px` : '0px'};
  padding-bottom: ${props =>
    props.paddingBottom ? `${hp(props.paddingBottom)}px` : '0px'};

  ${props =>
    props.height &&
    css`
      height: ${hp(props.height)}px;
    `}

  ${props =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}

  ${props =>
    props.marginHorizontal &&
    css`
      margin-horizontal: ${hp(props.marginHorizontal)}px;
    `}

  ${props =>
    props.paddingVertical &&
    css`
      padding-vertical: ${hp(props.paddingVertical)}px;
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

    ${props =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}
`;

export default Row;
