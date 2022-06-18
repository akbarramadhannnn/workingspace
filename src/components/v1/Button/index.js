import React, {memo} from 'react';
import {Button, Text} from './ButtonStyled';

const Index = ({children, size, variant, onPress, isDisabled}) => {
  return (
    <Button
      size={size}
      variant={variant}
      onPress={isDisabled ? () => {} : onPress}
      isDisabled={isDisabled}>
      <Text size={size} variant={variant}>
        {children}
      </Text>
    </Button>
  );
};

export default memo(Index);
