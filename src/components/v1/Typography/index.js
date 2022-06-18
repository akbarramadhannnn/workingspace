import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from './TypographyStyled';

const Index = ({
  type,
  children,
  textAlign,
  onPressLink = () => {},
  isDisabled = false,
  variant = 'secondary',
}) => {
  return (
    <>
      {type === 'link' ? (
        <TouchableOpacity onPress={isDisabled ? () => {} : onPressLink}>
          <View>
            <Text type={type} textAlign={textAlign} isDisabled={isDisabled}>
              {children}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <Text type={type} textAlign={textAlign} variant={variant}>
          {children}
        </Text>
      )}
    </>
  );
};

export default memo(Index);
