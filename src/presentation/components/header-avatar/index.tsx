import * as React from 'react';
import {ImageSourcePropType} from 'react-native';

import {Avatar} from '../avatar';

import {
  Container,
  AvatarContainer,
  ContentContainer,
  Title,
  Name,
  SearchContainer,
  SearchIcon,
  NotificationContainer,
  NotificationIcon,
} from './styles';

export type HeaderAvatarProps = {
  name: string;
  title: string;
  avatar: ImageSourcePropType;
  onPressAvatar: () => void;
  onPressSearch: () => void;
  onPressNotification: () => void;
};

export const HeaderAvatar: React.FC<HeaderAvatarProps> = React.memo(
  ({
    name,
    title,
    avatar,
    onPressAvatar,
    onPressSearch,
    onPressNotification,
  }) => {
    return (
      <Container>
        <AvatarContainer onPress={onPressAvatar}>
          <Avatar source={avatar} />
        </AvatarContainer>
        <ContentContainer>
          <Title>{title}</Title>
          <Name>{name}</Name>
        </ContentContainer>
        <SearchContainer onPress={onPressSearch}>
          <SearchIcon />
        </SearchContainer>
        <NotificationContainer onPress={onPressNotification}>
          <NotificationIcon />
        </NotificationContainer>
      </Container>
    );
  },
);
