import styled from 'styled-components/native';

import {ThemeColors, ThemeType} from '../../theme/types';

export type ScreenProps = {
  theme: ThemeType;
  color?: keyof ThemeColors;
};

const getBackgroundColor = ({theme, color}: ScreenProps) =>
  color ? theme.colors[color] : theme.colors.background;

export const FullScreen = styled.View<ScreenProps>`
  flex: 1;
  background-color: ${getBackgroundColor};
`;

export const ContentScreen = styled.SafeAreaView<ScreenProps>`
  flex: 1;
  background-color: ${getBackgroundColor};
`;
