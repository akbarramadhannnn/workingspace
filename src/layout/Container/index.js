import React, {memo, Fragment, useMemo} from 'react';
import {View, Platform, StatusBar, Dimensions} from 'react-native';
import Container from './ContainerStyled';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const {height: W_HEIGHT, width: W_WIDTH} = Dimensions.get('window');

let isIPhoneX = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
  isIPhoneX =
    (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) ||
    (W_WIDTH === XSMAX_WIDTH && W_HEIGHT && XSMAX_HEIGHT);
}

const Index = ({
  children,
  backgroundColor = 'white',
  barStyle = 'dark-content',
  ...props
}) => {
  const getStatusBarHeight = useMemo(() => {
    if (Platform.OS === 'ios') {
      return isIPhoneX ? 44 : 20;
    } else {
      return StatusBar.currentHeight;
    }
  }, []);

  return (
    <Fragment>
      <View style={{backgroundColor, height: getStatusBarHeight}}>
        <StatusBar
          translucent
          backgroundColor={backgroundColor}
          barStyle={barStyle}
          {...props}
        />
      </View>
      <Container>{children}</Container>
    </Fragment>
  );
};

export default memo(Index);
