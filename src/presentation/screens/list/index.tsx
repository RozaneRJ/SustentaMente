import * as React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

import {
  Screen,
  Header,
  CardSimple,
  Categories,
  EmptyList,
} from '../../components';

import {Post} from '../../types';
import {ListContext} from './context';
import {filterPostsByCategoryId} from '../../utils/filter-posts-by-category-id';

import {categories, hotTopics, mostPopular} from '../home/mock';

export type ListRoute = {
  context: ListContext;
};

const ListScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [categoryId, setCategoryId] = React.useState(0);

  const {context} = route.params as ListRoute;

  const title =
    context === ListContext.HOT_TOPICS ? 'Tópicos quentes' : 'Mais popular';

  const posts = context === ListContext.HOT_TOPICS ? hotTopics : mostPopular;

  const onPressBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onPressCategory = React.useCallback((id: number) => {
    setCategoryId(id);
  }, []);

  const onPressItem = React.useCallback(
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

  const renderItem = ({item}: ListRenderItemInfo<Post>) => {
    const style = {
      marginBottom: 20,
    };

    const onPress = onPressItem(item.id);

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
    paddingTop: 20,
    paddingRight: 10,
    paddingBottom: 20,
    paddingLeft: 10,
  };

  const filterByCategory = filterPostsByCategoryId(categoryId);
  const data = categoryId === 0 ? posts : posts.filter(filterByCategory);
  const selectedCategory = categories.find(item => item.id === categoryId);

  return (
    <Screen isScrollableContent={false} withSafeArea={false}>
      <Header title={title} onPressBack={onPressBack} />
      <Categories
        categories={categories}
        selectedCategoryId={categoryId}
        onPressCategory={onPressCategory}
      />
      {data.length ? (
        <FlatList<Post>
          style={styleList}
          data={data}
          horizontal={false}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <EmptyList category={selectedCategory?.title as string} />
      )}
    </Screen>
  );
};

export default React.memo(ListScreen);
