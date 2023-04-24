import * as React from 'react';
import {ScrollView, StyleProp, ViewStyle} from 'react-native';

import {ThemeColors} from '../../theme/types';
import {FullScreen, ContentScreen} from './styles';

export type ScreenProps = {
  isScrollableContent?: boolean;
  color?: keyof ThemeColors;
  withSafeArea?: boolean;
  style?: StyleProp<ViewStyle>;
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
};

export const Screen: React.FC<React.PropsWithChildren<ScreenProps>> =
  React.memo(
    ({
      style,
      color,
      children,
      withSafeArea = true,
      isScrollableContent = true,
      showsVerticalScrollIndicator,
      showsHorizontalScrollIndicator,
    }) => {
      if (!children) {
        return null;
      }

      const styleScroll = {
        paddingBottom: 40,
      };

      const content = !isScrollableContent ? (
        children
      ) : (
        <ScrollView
          style={style}
          contentContainerStyle={styleScroll}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}>
          {children}
        </ScrollView>
      );

      return (
        <FullScreen color={color}>
          {children && !withSafeArea && content}
          {children && withSafeArea && (
            <ContentScreen color={color}>{content}</ContentScreen>
          )}
        </FullScreen>
      );
    },
  );
