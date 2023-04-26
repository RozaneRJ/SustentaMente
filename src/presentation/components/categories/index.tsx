import * as React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Badge} from '../badge';
import {Category} from '../../types';

export type CategoriesProps = {
  categories: Category[];
  selectedCategoryId: number;
  onPressCategory: (categoryId: number) => void;
};

export const Categories: React.FC<CategoriesProps> = React.memo(
  ({categories, onPressCategory, selectedCategoryId}) => {
    const onPress = React.useCallback(
      (categoryId: number) => {
        return () => onPressCategory(categoryId);
      },
      [onPressCategory],
    );

    const renderItem = ({item, index}: ListRenderItemInfo<Category>) => {
      const isCategorySelected = selectedCategoryId === item.id;
      const color = isCategorySelected ? 'primary' : undefined;
      const textColor = isCategorySelected ? 'white' : undefined;
      const fontWeight = isCategorySelected ? 'bold' : undefined;

      const style = {
        marginRight: index === categories.length - 1 ? 20 : 5,
      };

      return (
        <Badge
          style={style}
          color={color}
          onPress={onPress(item.id)}
          title={item.title}
          textColor={textColor}
          fontWeight={fontWeight}
        />
      );
    };

    const styleList = {
      minHeight: 35,
      maxHeight: 35,
      marginTop: 20,
      marginBottom: 20,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 10,
    };

    return (
      <FlatList<Category>
        style={styleList}
        data={categories}
        horizontal={true}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
      />
    );
  },
);
