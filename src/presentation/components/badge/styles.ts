import styled from 'styled-components/native';

import {ThemeColors} from '../../theme/types';

export type ContainerProps = {
  color?: keyof ThemeColors;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  padding: 5px 10px;
  max-height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: ${({theme, color}) =>
    color ? theme.colors[color] : theme.colors.shape};
`;

export type TitleProps = {
  fontWeight?: string | number;
  textColor?: keyof ThemeColors;
};

export const Title = styled.Text<TitleProps>`
  font-size: 14px;
  font-weight: ${({fontWeight}) => fontWeight ?? 'normal'};
  color: ${({theme, textColor}) =>
    textColor ? theme.colors[textColor] : theme.colors.text};
`;
