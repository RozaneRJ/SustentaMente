import * as React from 'react';
import {ScrollView} from 'react-native';

import {ThemeColors} from '../../theme/types';
import {FullScreen, ContentScreen} from './styles';

export type ScreenProps = {
  isScrollableContent?: boolean;
  color?: keyof ThemeColors;
};

export const Screen: React.FC<React.PropsWithChildren<ScreenProps>> =
  React.memo(({isScrollableContent = true, color, children}) => {
    const content = !isScrollableContent ? (
      children
    ) : (
      <ScrollView>{children}</ScrollView>
    );

    return (
      <FullScreen color={color}>
        {children && <ContentScreen color={color}>{content}</ContentScreen>}
      </FullScreen>
    );
  });