import * as React from 'react';
import {ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';

import {Avatar} from '../avatar';
import {getThemeShadow} from '../../theme';
import {formatDate, formatTime} from '../../utils/date-time';

import {
  Container,
  Image,
  Content,
  MetaData,
  Author,
  DateTimeContainer,
  Date,
  Time,
  TitleContainer,
  Title,
} from './styles';

export type User = {
  name: string;
  image: ImageSourcePropType;
};

export type CardProps = {
  image: ImageSourcePropType;
  user: User;
  date: string;
  title: string;
  width?: number;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export const Card: React.FC<CardProps> = React.memo(
  ({image, user, date, title, width, onPress, style}) => {
    // @ts-ignore
    const propStyle = style || width ? {...style, width} : {};

    const cardStyle = {
      ...propStyle,
      ...getThemeShadow(),
    };

    const imageStyle = width ? {width} : {};

    return (
      <Container onPress={onPress} style={cardStyle}>
        <Image source={image} style={imageStyle} />
        <Content>
          <Avatar source={user.image} size={30} rounded={15} />
          <MetaData>
            <Author>{user.name}</Author>
            <DateTimeContainer>
              <Date>{formatDate(date)}</Date>
              <Time>{formatTime(date)}</Time>
            </DateTimeContainer>
          </MetaData>
        </Content>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      </Container>
    );
  },
);
