import * as React from 'react';
import {ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';

import {Avatar} from '../avatar';
import {getThemeShadow} from '../../theme';
import {formatTime} from '../../utils/date-time';

import {
  Container,
  Image,
  Content,
  MetaData,
  Author,
  Time,
  TitleContainer,
  Title,
} from './styles';

export type UserSimple = {
  name: string;
  image: ImageSourcePropType;
};

export type CardSimpleProps = {
  image: ImageSourcePropType;
  user: UserSimple;
  date: Date;
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export const CardSimple: React.FC<CardSimpleProps> = React.memo(
  ({image, user, date, title, onPress, style}) => {
    const propStyle = style ?? {};

    const cardStyle = {
      // @ts-ignore
      ...propStyle,
      ...getThemeShadow(),
    };

    return (
      <Container onPress={onPress} style={cardStyle}>
        <Image source={image} />
        <Content>
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
          <MetaData>
            <Avatar source={user.image} size={30} rounded={15} />
            <Author>{user.name}</Author>
            <Time>{formatTime(date)}</Time>
          </MetaData>
        </Content>
      </Container>
    );
  },
);
