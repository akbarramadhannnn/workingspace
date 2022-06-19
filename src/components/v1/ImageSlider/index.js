import React, {memo, useRef} from 'react';
import {wp} from '@utils/responsiveScreen';
import {Text, View, Dimensions, Animated, StyleSheet} from 'react-native';
import {Image, DotWrapper, Dot} from './ImageSliderStyled';

const {width} = Dimensions.get('window');

const Indicator = memo(({data, scrollX}) => {
  return (
    <DotWrapper>
      {data.map((d, i) => {
        const inputRangeScale = [(i - 1) * width, i * width, (i + 1) * width];

        // const scale = scrollX.interpolate({
        //   inputRange: inputRangeScale,
        //   outputRange: [0.8, 1.4, 0.8],
        //   extrapolate: 'clamp',
        // });

        const opacity = scrollX.interpolate({
          inputRange: inputRangeScale,
          outputRange: [0.6, 1, 0.6],
          extrapolate: 'clamp',
        });

        const widthArea = scrollX.interpolate({
          inputRange: inputRangeScale,
          outputRange: [wp(2), wp(5), wp(2)],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange: inputRangeScale,
          outputRange: ["#ecf0ff", "#6284fd", "#ecf0ff"],
          extrapolate: 'clamp',
        });
  

        return (
          <Animated.View
            key={i}
            style={[
              {
                width: wp(2),
                height: wp(2),
                marginRight: wp(3),
                marginBottom: wp(3.5),
                borderRadius: 30,
              },
              {
                width: widthArea,
                // backgroundColor: '#2d5bff',
                backgroundColor,
                opacity,
                // transform: [
                //   {
                //     scale,
                //   },
                // ],
              },
            ]}
          />
        );
      })}
    </DotWrapper>
  );
});

const Index = ({data}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <Animated.FlatList
        horizontal
        data={data}
        keyExtractor={(_, index) => 'key' + index}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                position: 'relative',
                width,
              }}>
              <Image
                source={{uri: item}}
                style={{
                  width,
                }}
              />
            </View>
          );
        }}
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        // onMomentumScrollEnd={e => {
        //   console.log(Math.floor(e.nativeEvent.contentOffset.x / width));
        // }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={32}
      />

      <Indicator data={data} scrollX={scrollX} />
    </View>
  );
};

export default memo(Index);
