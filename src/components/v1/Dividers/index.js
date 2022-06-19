import React, {memo} from 'react';
import {View} from 'react-native';
import {TypographyV1} from '@components';
import {Row} from '@layout';
import colors from '@assets/colors';

const Index = ({text}) => {
  return (
    <Row
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          height: 0.4,
          backgroundColor: colors.greyscale.dividers,
          marginRight: text ? 10 : 0,
        }}
      />
      {text && (
        <TypographyV1 type="text" textAlign="center" variant="secondary">
          {text}
        </TypographyV1>
      )}
      <View
        style={{
          flex: 1,
          height: 0.4,
          backgroundColor: colors.greyscale.dividers,
          marginLeft: text ? 10 : 0,
        }}
      />
    </Row>
  );
};

export default memo(Index);
