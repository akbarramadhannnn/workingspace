import React, {memo, useCallback} from 'react';
import {Container, Text} from './TopStyled';
import {HeaderV1} from '@components';

const Index = ({title = '', isHeader = false, textColorHeader, textHeader}) => {
  return (
    <Container isHeader={isHeader}>
      {isHeader && (
        <HeaderV1 textColorHeader={textColorHeader} textHeader={textHeader} />
      )}
      <Text>{title}</Text>
    </Container>
  );
};

export default memo(Index);
