import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {TypographyV1} from '@components';
import {Container, LeftArea, RightArea} from './HeadingStyled';

const Index = ({title = '', typeRightArea = 'action'}) => {
  return (
    <Container>
      <LeftArea>
        {title !== '' && <TypographyV1 type="title">{title}</TypographyV1>}
      </LeftArea>

      <RightArea typeRightArea={typeRightArea}>
        <TypographyV1 type="text">Nama</TypographyV1>
      </RightArea>
    </Container>
  );
};

export default memo(Index);
