import React, {memo} from 'react';
import {View} from 'react-native';
import {
  Container,
  TouchableOpacity,
  Image,
  Title,
} from './SocialMediaListStyled';

const Index = () => {
  const data = [
    {
      urlImage: require('@assets/images/Google-1.png'),
      title: 'Masuk dengan Google',
    },
  ];

  return (
    <Container>
      {data.map((d, i) => (
        <TouchableOpacity key={i} isLastIndex={i + 1 === data.length}>
          <Image source={d.urlImage} resizeMode="stretch" />
          <View
            style={{
              width: '100%',
              position: 'absolute',
            }}>
            <Title>{d.title}</Title>
          </View>
        </TouchableOpacity>
      ))}
    </Container>
  );
};

export default memo(Index);
