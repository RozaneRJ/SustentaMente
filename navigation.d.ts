import {Post} from './src/presentation/types';

export type RootStackParamList = {
  Home: {};
  Post: {post: Post};
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
