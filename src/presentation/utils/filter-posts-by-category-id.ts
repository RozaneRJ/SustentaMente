import {Post} from '../types';

export const filterPostsByCategoryId = (categoryId: number) => (item: Post) =>
  item.category === categoryId;
