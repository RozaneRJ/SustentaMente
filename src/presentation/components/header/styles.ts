import styled from 'styled-components/native';
import {StyleProp, ViewStyle} from 'react-native';

import {getThemeColor} from '../../theme';
import {iconSize} from '../../utils/icon-size';

import BackSvg from '../../assets/svg/back.svg';

export type ContainerProps = {
  height?: number;
  style?: StyleProp<ViewStyle>;
};

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  padding-top: ${({height}) => height}px;
  height: ${({height}) => (height ?? 0) + 56}px;
  background-color: ${getThemeColor('background')};
`;

export const BackIcon = styled(BackSvg).attrs(() => iconSize(16))``;

export const BackButton = styled.TouchableOpacity`
  margin-left: 10px;
  width: 40px;
  height: 40px;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${getThemeColor('header')};
`;
