import React from 'react';
import {ScrollView} from 'react-native';
import {
  InputV1,
  TypographyV1,
  ButtonV1,
  SocialMediaListV1,
  BackgroundTopV1,
  DividersV1,
  ImageSliderV1,
  HeaderV1,
  HeadingV1,
} from '@components';
import {Container, Row} from '@layout';

const Index = () => {
  const sliderImageList = [
    'https://cdn.pixabay.com/photo/2020/08/13/16/43/coworking-space-in-gurgaon-5485822_1280.jpg',
    'https://media.istockphoto.com/photos/team-meeting-and-brainstorming-in-modern-office-picture-id1318361126',
    'https://media.istockphoto.com/photos/group-of-young-business-people-are-working-together-with-laptop-picture-id1202718041',
    'https://media.istockphoto.com/photos/team-meeting-and-brainstorming-in-modern-office-picture-id1318361946',
  ];
  return (
    <Container>
      <ScrollView>
        <Row>
          <HeaderV1
            background="white"
            colorIcon="grey"
            textHeader="Title Header"
            paddingHorizontal={1.5}
          />
        </Row>

        <Row marginBottom={1}>
          <ImageSliderV1 data={sliderImageList} />
        </Row>

        <Row marginBottom={8}>
          <HeadingV1 title="Specialist" />
        </Row>

        <Row marginBottom={8}>
          <HeadingV1 title="Services" />
        </Row>

        <Row marginBottom={8}>
          <HeadingV1 title="Working Hours" />
        </Row>

        <Row marginBottom={8}>
          <HeadingV1 title="Contact Us" />
        </Row>

        <Row marginBottom={8}>
          <HeadingV1 title="Contact Us" />
        </Row>

        <Row marginBottom={8}>
          <HeadingV1 title="Contact Us" />
        </Row>
      </ScrollView>
    </Container>
  );
};

export default Index;
