import {Post} from './src/presentation/types';
import {ListContext} from './src/presentation/screens/list/context';

export type RootStackParamList = {
  Home: {};
  Post: {post: Post};
  List: {context: ListContext};
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
