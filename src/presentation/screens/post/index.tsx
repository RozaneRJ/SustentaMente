import * as React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Post, PostContentType} from '../../types';
import {Avatar, Screen} from '../../components';
import {formatDate} from '../../utils/date-time';

import {
  BackIcon,
  BackButton,
  ImageContainer,
  Content,
  Title,
  MetaDataContainer,
  MetaDataContent,
  Author,
  Date,
  PostContentHeader,
  PostContentText,
  PostContentImage,
  PostContentStrong,
} from './styles';

export type PostRoute = {
  post: Post;
};

export const PostScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const {post} = route.params as PostRoute;

  const components = {
    [PostContentType.HEADER]: PostContentHeader,
    [PostContentType.TEXT]: PostContentText,
    [PostContentType.IMAGE]: PostContentImage,
    [PostContentType.STRONG]: PostContentStrong,
  };

  const content = post.content.map(item => {
    const Component = components[item.type] ?? null;

    if (!Component) {
      return null;
    }

    // @ts-ignore
    return <Component key={item.key} value={item.value} />;
  });

  const onPressBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Screen
      withSafeArea={false}
      isScrollableContent={true}
      showsVerticalScrollIndicator={false}>
      <ImageContainer top={insets.top} source={post.image}>
        <BackButton onPress={onPressBack}>
          <BackIcon />
        </BackButton>
      </ImageContainer>
      <Content>
        <Title>{post.title}</Title>
        <MetaDataContainer>
          <Avatar source={post.user.image} size={30} rounded={15} />
          <MetaDataContent>
            <Author>{post.user.name}</Author>
            <Date>{formatDate(post.date)}</Date>
          </MetaDataContent>
        </MetaDataContainer>
        {content}
      </Content>
    </Screen>
  );
};

export default React.memo(PostScreen);
