import {ImageSourcePropType} from 'react-native';

export type User = {
  name: string;
  image: ImageSourcePropType;
};

export const avatar =
  'https://conteudo.imguol.com.br/c/entretenimento/2e/2021/02/24/agnes-hikari-1614196043650_v2_300x400.jpg';

export const name = 'Leslie Alexander';
export const title = 'Welcome Back 👋🏼';

export type Category = {
  id: number;
  title: string;
};

export const categories: Category[] = [
  {
    id: 0,
    title: 'Todos',
  },
  {
    id: 1,
    title: 'Economia',
  },
  {
    id: 2,
    title: 'Educação',
  },
  {
    id: 3,
    title: 'Tecnologia',
  },
  {
    id: 4,
    title: 'Natureza',
  },
  {
    id: 5,
    title: 'Saneamento',
  },
];

export type HotTopics = {
  id: number;
  image: ImageSourcePropType;
  user: User;
  date: Date;
  title: string;
  category: number;
};

export const hotTopics: HotTopics[] = [
  {
    id: 1,
    image: {
      uri: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    },
    user: {
      name: 'Leslie Alexander',
      image: {
        uri: 'https://conteudo.imguol.com.br/c/entretenimento/2e/2021/02/24/agnes-hikari-1614196043650_v2_300x400.jpg',
      },
    },
    category: 1,
    date: new Date(),
    title: 'Hot Topic 1',
  },
  {
    id: 2,
    image: {
      uri: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    },
    user: {
      name: 'Leslie Alexander',
      image: {
        uri: 'https://conteudo.imguol.com.br/c/entretenimento/2e/2021/02/24/agnes-hikari-1614196043650_v2_300x400.jpg',
      },
    },
    category: 3,
    date: new Date(),
    title: 'Hot Topic 2',
  },
];

export type MostPopular = {
  id: number;
  image: ImageSourcePropType;
  user: User;
  date: Date;
  title: string;
  category: number;
};

export const mostPopular: MostPopular[] = [
  {
    id: 1,
    image: {
      uri: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    },
    user: {
      name: 'Leslie Alexander',
      image: {
        uri: 'https://conteudo.imguol.com.br/c/entretenimento/2e/2021/02/24/agnes-hikari-1614196043650_v2_300x400.jpg',
      },
    },
    category: 1,
    date: new Date(),
    title: 'Most Popular 1',
  },
  {
    id: 2,
    image: {
      uri: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    },
    user: {
      name: 'Leslie Alexander',
      image: {
        uri: 'https://conteudo.imguol.com.br/c/entretenimento/2e/2021/02/24/agnes-hikari-1614196043650_v2_300x400.jpg',
      },
    },
    category: 2,
    date: new Date(),
    title: 'Most Simple 2',
  },
  {
    id: 3,
    image: {
      uri: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    },
    user: {
      name: 'Leslie Alexander',
      image: {
        uri: 'https://conteudo.imguol.com.br/c/entretenimento/2e/2021/02/24/agnes-hikari-1614196043650_v2_300x400.jpg',
      },
    },
    category: 4,
    date: new Date(),
    title: 'Most Simple 3',
  },
];
