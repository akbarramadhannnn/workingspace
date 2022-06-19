import React, {memo, useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {wp} from '@utils/responsiveScreen';
import SvgIcons from '@assets/SvgIcons';
import {pop} from '@utils/navigations';
import {Container, Title} from './HeaderStyled';

const Index = ({
  background,
  paddingHorizontal,
  textColorHeader,
  textHeader,
  colorIcon,
}) => {
  const handlePress = useCallback(() => {
    pop();
  }, []);
  return (
    <Container paddingHorizontal={paddingHorizontal} background={background}>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          marginRight: wp(1),
          marginLeft: -2.5,
        }}>
        {colorIcon === 'grey' && (
          <SvgIcons.ArrowLeftBoldGrey width={wp(8)} height={wp(8)} />
        )}
        {!colorIcon && (
          <SvgIcons.ArrowLeftBoldWhite width={wp(8)} height={wp(8)} />
        )}
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
