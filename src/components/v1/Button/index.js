import React, {memo} from 'react';
import {Button, Text} from './ButtonStyled';

const Index = ({children, size, variant}) => {
  return (
    <Button size={size} variant={variant}>
      <Text size={size} variant={variant}>
        {children}
      </Text>
    </Button>
  );
};

export default memo(Index);
