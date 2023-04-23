import {ImageSourcePropType} from 'react-native';

export type User = {
  name: string;
  image: ImageSourcePropType;
};

export type Category = {
  id: number;
  title: string;
};

export enum PostContentType {
  HEADER = 'header',
  TEXT = 'text',
  IMAGE = 'image',
  STRONG = 'string',
}

export type PostContent = {
  key: string;
  type: PostContentType;
  value: string;
};

export type Post = {
  id: number;
  image: ImageSourcePropType;
  user: User;
  date: string;
  title: string;
  category: number;
  content: PostContent[];
};
