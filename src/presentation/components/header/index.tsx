import * as React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {getThemeShadow} from '../../theme';

import {Container, BackButton, BackIcon, Title} from './styles';

export type HeaderProps = {
  title: string;
  onPressBack?: () => void;
};

export const Header: React.FC<HeaderProps> = React.memo(
  ({title, onPressBack}) => {
    const insets = useSafeAreaInsets();

    // @ts-ignore
    const style: StyleProp<ViewStyle> = {
      ...getThemeShadow(),
    };

    return (
      <Container height={insets.top} style={style}>
        <BackButton onPress={onPressBack}>
          <BackIcon />
        </BackButton>
        <Title>{title}</Title>
      </Container>
    );
  },
);
