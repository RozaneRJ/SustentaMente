import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import {getThemeColor} from '../../theme';

const {width: widthWindow} = Dimensions.get('window');

const numberOfLines = () => {
  return {numberOfLines: 2};
};

export const Container = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: ${getThemeColor('white')};
`;

export const Image = styled.Image`
  width: ${widthWindow - 100}px;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Content = styled.View`
  padding: 10px;
  flex-direction: row;
`;

export const MetaData = styled.View`
  flex: 1;
  padding-left: 10px;
  justify-content: space-between;
`;

export const Author = styled.Text.attrs(numberOfLines)`
  font-size: 14px;
  font-weight: bold;
  color: ${getThemeColor('header')};
`;

export const DateTimeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Date = styled.Text.attrs(numberOfLines)`
  font-size: 12px;
  color: ${getThemeColor('text')};
`;

export const Time = styled.Text.attrs(numberOfLines)`
  font-size: 12px;
  color: ${getThemeColor('text')};
`;

export const TitleContainer = styled.View`
  padding: 10px;
`;

export const Title = styled.Text.attrs(numberOfLines)`
  font-size: 16px;
  font-weight: bold;
  color: ${getThemeColor('header')};
`;
