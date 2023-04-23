import * as React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {ThemeColors} from '../../theme/types';

import {Container, Title} from './styles';

export type BadgeProps = {
  title: string;
  onPress: () => void;
  color?: keyof ThemeColors;
  fontWeight?: string | number;
  textColor?: keyof ThemeColors;
  style?: StyleProp<ViewStyle>;
};

export const Badge: React.FC<BadgeProps> = React.memo(
  ({title, onPress, fontWeight, color, textColor, style}) => {
    return (
      <Container color={color} onPress={onPress} style={style}>
        <Title fontWeight={fontWeight} textColor={textColor}>
          {title}
        </Title>
      </Container>
    );
  },
);
