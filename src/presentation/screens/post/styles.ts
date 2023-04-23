import {createElement} from 'react';
import styled from 'styled-components/native';

import {getThemeColor} from '../../theme';
import {iconSize} from '../../utils/icon-size';

import BackSvg from '../../assets/svg/back.svg';

export type PostContentType = {
  value: string;
};

const numberOfLines = () => {
  return {numberOfLines: 2};
};

export const BackIcon = styled(BackSvg).attrs(() => iconSize(16))``;

export const BackButton = styled.TouchableOpacity`
  margin-left: 16px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: ${getThemeColor('white')}80;
`;

export type ImageContainerProps = {
  top: number;
};

export const ImageContainer = styled.ImageBackground<ImageContainerProps>`
  width: 100%;
  height: 300px;
  padding-top: ${({top}) => top}px;
`;

export const Content = styled.View`
  padding: 0 16px;
`;

export const Title = styled.Text.attrs(numberOfLines)`
  margin: 20px 0;
  font-size: 18px;
  font-weight: bold;
  color: ${getThemeColor('header')};
`;

export const MetaDataContainer = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
`;

export const MetaDataContent = styled.View`
  flex: 1;
  padding-left: 10px;
`;

export const Author = styled.Text.attrs(numberOfLines)`
  font-size: 14px;
  font-weight: bold;
  color: ${getThemeColor('header')};
`;

export const Date = styled.Text.attrs(numberOfLines)`
  font-size: 12px;
  color: ${getThemeColor('text')};
`;

export const PostContentHeader = styled.Text.attrs(
  ({value}: PostContentType) => {
    return {
      children: value,
    };
  },
)`
  margin: 10px 0 16px 0;
  font-size: 16px;
  font-weight: bold;
  color: ${getThemeColor('header')};
`;

export const PostContentText = styled.Text.attrs(({value}: PostContentType) => {
  return {
    children: value,
  };
})`
  margin: 10px 0;
  font-size: 14px;
  color: ${getThemeColor('text')};
`;

export const PostContentImage = styled.Image.attrs(
  ({value}: PostContentType) => {
    return {
      source: {uri: value},
    };
  },
)`
  width: 100%;
  height: 250px;
  border-radius: 10px;
`;

export const PostContentStrong = styled.View.attrs(
  ({value}: PostContentType) => {
    return {
      // @ts-ignore
      children: createElement(PostContentStrongText, {value}),
    };
  },
)`
  margin: 10px 0;
  padding: 10px;
  background-color: ${getThemeColor('shape')};
  border-left-width: 2px;
  border-color: ${getThemeColor('primary')};
`;

export const PostContentStrongText = styled.Text.attrs(
  ({value}: PostContentType) => {
    return {
      children: value,
    };
  },
)`
  font-size: 14px;
  color: ${getThemeColor('text')};
`;
