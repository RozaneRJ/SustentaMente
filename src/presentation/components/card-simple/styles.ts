import styled from 'styled-components/native';

import {getThemeColor} from '../../theme';

const numberOfLines = () => {
  return {numberOfLines: 2};
};

export const Container = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  flex-direction: row;
  background-color: ${getThemeColor('white')};
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 15px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 10px;
  justify-content: space-between;
`;

export const MetaData = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Author = styled.Text.attrs(numberOfLines)`
  flex: 1;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  color: ${getThemeColor('header')};
`;

export const Time = styled.Text.attrs(numberOfLines)`
  font-size: 12px;
  color: ${getThemeColor('text')};
`;

export const TitleContainer = styled.View``;

export const Title = styled.Text.attrs(numberOfLines)`
  font-size: 16px;
  font-weight: bold;
  color: ${getThemeColor('header')};
`;
