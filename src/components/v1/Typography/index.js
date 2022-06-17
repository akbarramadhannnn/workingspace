import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from './TypographyStyled';

const Index = ({type, children, textAlign, onPressLink = () => {}}) => {
  return (
    <>
      {type === 'link' ? (
        <TouchableOpacity onPress={onPressLink}>
          <View>
            <Text type={type} textAlign={textAlign}>
              {children}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <Text type={type} textAlign={textAlign}>
          {children}
        </Text>
      )}
    </>
  );
};

export default memo(Index);
