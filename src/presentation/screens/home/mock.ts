import {Category, Post, PostContentType} from '../../types';

export const avatar =
  'https://conteudo.imguol.com.br/c/entretenimento/2e/2021/02/24/agnes-hikari-1614196043650_v2_300x400.jpg';

export const name = 'Leslie Alexander';
export const title = 'Welcome Back 👋🏼';

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

export const hotTopics: Post[] = [
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
    date: new Date().toString(),
    title: 'Hot Topic 1',
    content: [
      {
        key: 'c1',
        type: PostContentType.TEXT,
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at neque ex. Phasellus sit amet maximus velit, vel facilisis nisl. Proin ullamcorper neque lacus, in pellentesque leo vulputate ac. Mauris molestie facilisis sollicitudin. Aenean luctus arcu metus, et mollis erat maximus a.',
      },
      {
        key: 'c2',
        type: PostContentType.STRONG,
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at neque ex. Phasellus sit amet maximus velit, vel facilisis nisl. Proin ullamcorper neque lacus, in pellentesque leo vulputate ac. Mauris molestie facilisis sollicitudin. Aenean luctus arcu metus, et mollis erat maximus a.',
      },
      {
        key: 'c3',
        type: PostContentType.HEADER,
        value: 'Lorem ipsum dolor sit amet',
      },
      {
        key: 'c4',
        type: PostContentType.IMAGE,
        value:
          'https://services.meteored.com/img/article/interacao-oceano-atmosfera-11501-5_1280.jpg',
      },
    ],
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
    date: new Date().toString(),
    title: 'Hot Topic 2',
    content: [],
  },
];

export const mostPopular: Post[] = [
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
    date: new Date().toString(),
    title: 'Most Popular 1',
    content: [],
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
    date: new Date().toString(),
    title: 'Most Simple 2',
    content: [],
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
    date: new Date().toString(),
    title: 'Most Simple 3',
    content: [],
  },
];
