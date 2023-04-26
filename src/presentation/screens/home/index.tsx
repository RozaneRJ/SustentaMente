import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, FlatList, ListRenderItemInfo} from 'react-native';

import {
  Screen,
  HeaderAvatar,
  Card,
  CardSimple,
  Categories,
  EmptyList,
} from '../../components';

import {Post} from '../../types';
import {ListContext} from '../list/context';
import {filterPostsByCategoryId} from '../../utils/filter-posts-by-category-id';

import {avatar, name, title, categories, hotTopics, mostPopular} from './mock';

import {TitleContainer, Title, ViewAll, ViewAllLabel} from './styles';

type HomeContentItem = {
  key: string;
  isTitle?: boolean;
  render: () => JSX.Element | null;
};

const {width: widthWindow} = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [categoryId, setCategoryId] = React.useState(0);

  const onPressAvatar = React.useCallback(() => {
    // code here...
  }, []);

  const onPressSearch = React.useCallback(() => {
    // code here...
  }, []);

  const onPressNotification = React.useCallback(() => {
    // code here...
  }, []);

  const onPressCategory = React.useCallback((id: number) => {
    setCategoryId(id);
  }, []);

  const onPressAllHotTopic = React.useCallback(() => {
    navigation.navigate('List', {context: ListContext.HOT_TOPICS});
  }, [navigation]);

  const onPressHotTopic = React.useCallback(
    (postId: number) => {
      return () => {
        const post = hotTopics.find(item => item.id === postId);

        if (post) {
          navigation.navigate('Post', {post});
        }
      };
    },
    [navigation],
  );

  const onPressAllMostPopular = React.useCallback(() => {
    navigation.navigate('List', {context: ListContext.MOST_POPULAR});
  }, [navigation]);

  const onPressMostPopular = React.useCallback(
    (postId: number) => {
      return () => {
        const post = mostPopular.find(item => item.id === postId);

        if (post) {
          navigation.navigate('Post', {post});
        }
      };
    },
    [navigation],
  );

  const {data, indexes} = React.useMemo(() => {
    const filterCategory = filterPostsByCategoryId(categoryId);

    const listHotTopics =
      categoryId === 0 ? hotTopics : hotTopics.filter(filterCategory);

    const showHotTopics = listHotTopics.length > 0;

    const listMostPopular =
      categoryId === 0 ? mostPopular : mostPopular.filter(filterCategory);

    const showMostPopular = listMostPopular.length > 0;

    const hotTopicsComponents = [
      {
        key: 'TITLE_HOT_TOPICS',
        isTitle: true,
        render: () => {
          if (!showHotTopics) {
            return <></>;
          }

          return (
            <TitleContainer>
              <Title>Tópicos quentes</Title>
              <ViewAll onPress={onPressAllHotTopic}>
                <ViewAllLabel>Ver Tudo</ViewAllLabel>
              </ViewAll>
            </TitleContainer>
          );
        },
      },
      {
        key: 'HOT_TOPICS',
        render: () => {
          if (!showHotTopics) {
            return <></>;
          }

          const renderItem = ({item, index}: ListRenderItemInfo<Post>) => {
            const style = {
              marginRight: index === hotTopics.length - 1 ? 20 : 10,
            };

            const width =
              listHotTopics?.length === 1 ? widthWindow - 20 : undefined;

            const onPress = onPressHotTopic(item.id);

            return (
              <Card
                key={item.id}
                onPress={onPress}
                image={item.image}
                user={item.user}
                title={item.title}
                date={item.date}
                width={width}
                style={style}
              />
            );
          };

          const styleList = {
            paddingRight: 0,
            paddingBottom: 20,
            paddingLeft: 10,
          };

          return (
            <FlatList<Post>
              style={styleList}
              data={listHotTopics}
              horizontal={true}
              renderItem={renderItem}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
            />
          );
        },
      },
    ];

    const mostPopularComponents = [
      {
        key: 'TITLE_MOST_POPULAR',
        isTitle: true,
        render: () => {
          if (!showMostPopular) {
            return <></>;
          }

          return (
            <TitleContainer>
              <Title>Mais popular</Title>
              <ViewAll onPress={onPressAllMostPopular}>
                <ViewAllLabel>Ver Tudo</ViewAllLabel>
              </ViewAll>
            </TitleContainer>
          );
        },
      },
      {
        key: 'MOST_POPULAR',
        render: () => {
          if (!showMostPopular) {
            return <></>;
          }

          const renderItem = ({item}: ListRenderItemInfo<Post>) => {
            const style = {
              marginBottom: 20,
            };

            const onPress = onPressMostPopular(item.id);

            return (
              <CardSimple
                key={item.id}
                onPress={onPress}
                image={item.image}
                user={item.user}
                title={item.title}
                date={item.date}
                style={style}
              />
            );
          };

          const styleList = {
            paddingRight: 10,
            paddingBottom: 20,
            paddingLeft: 10,
          };

          return (
            <FlatList<Post>
              style={styleList}
              data={listMostPopular}
              horizontal={false}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
            />
          );
        },
      },
    ];

    const emptyComponents: HomeContentItem = {
      key: 'EMPTY',
      render: () => {
        const selectedCategory = categories.find(
          item => item.id === categoryId,
        );

        return <EmptyList category={selectedCategory?.title as string} />;
      },
    };

    let items: HomeContentItem[] = [
      {
        key: 'HEADER',
        render: () => (
          <HeaderAvatar
            name={name}
            title={title}
            avatar={{uri: avatar}}
            onPressAvatar={onPressAvatar}
            onPressSearch={onPressSearch}
            onPressNotification={onPressNotification}
          />
        ),
      },
      {
        key: 'CATEGORIES',
        render: () => (
          <Categories
            categories={categories}
            selectedCategoryId={categoryId}
            onPressCategory={onPressCategory}
          />
        ),
      },
    ];

    if (listHotTopics.length) {
      items = [...items, ...hotTopicsComponents];
    }

    if (listMostPopular.length) {
      items = [...items, ...mostPopularComponents];
    }

    if (!listHotTopics.length && !listMostPopular.length) {
      items = [...items, emptyComponents];
    }

    const itemsIndexes: number[] = [];

    items.forEach((item, index) => item.isTitle && itemsIndexes.push(index));

    return {
      data: items,
      indexes: itemsIndexes,
    };
  }, [
    categoryId,
    onPressAllHotTopic,
    onPressAllMostPopular,
    onPressAvatar,
    onPressCategory,
    onPressHotTopic,
    onPressMostPopular,
    onPressNotification,
    onPressSearch,
  ]);

  return (
    <Screen isScrollableContent={false} withSafeArea={true}>
      <FlatList<HomeContentItem>
        data={data}
        stickyHeaderIndices={indexes}
        keyExtractor={item => item.key}
        renderItem={({item}) => item.render()}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
};

export default React.memo(HomeScreen);
