import styled from 'styled-components/native';
import {wp, hp, normalize} from '@utils/responsiveScreen';
import colors from '@assets/colors';

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  position: relative;
  background: #fff;
  width: 100%;
  margin-bottom: ${props => (props.isLastIndex ? '0px' : `${hp(2.5)}px`)};
  border-radius: ${wp(3)}px;
  padding-vertical: ${hp(1.8)}px;
  // padding-horizontal: ${hp(1.5)}px;
  flex-direction: row;
  border-width: 1px;
  border-color: ${colors.lightgrey};
  // justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  height: ${wp(6.5)}px;
  width: ${wp(6.5)}px;
  margin-left: ${hp(4)}px;
`;

export const Title = styled.Text`
  font-size: ${normalize(16)}px;
  text-align: center;
  font-weight: 700;
  font-family: Poppins-Regular;
`;
