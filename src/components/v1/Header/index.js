import React, {memo, useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {wp} from '@utils/responsiveScreen';
import SvgIcons from '@assets/SvgIcons';
import {pop} from '@utils/navigations';
import {Container, Title} from './HeaderStyled';

const Index = ({textColorHeader, textHeader}) => {
  const handlePress = useCallback(() => {
    pop();
  }, []);
  return (
    <Container>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          marginRight: wp(2),
          marginLeft: -3.5
        }}>
        <SvgIcons.Arrow width={wp(8)} height={wp(8)} />
      </TouchableOpacity>

      {textHeader && (
        <View>
          <Title textColorHeader={textColorHeader}>{textHeader}</Title>
        </View>
      )}
    </Container>
  );
};

export default memo(Index);
