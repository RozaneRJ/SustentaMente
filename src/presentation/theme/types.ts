import {StatusBarStyle, ImageSourcePropType} from 'react-native';

export type ThemeAssets = {
  logo: ImageSourcePropType;
};

export type ThemeColors = {
  text: string;
  light: string;
  header: string;
  black: string;
  white: string;
  shape: string;
  primary: string;
  background: string;
  backgroundEnd: string;
  statusBar: StatusBarStyle;
};

export type ThemeType = {
  colors: ThemeColors;
  // assets: ThemeAssets;
};

export type ThemeProps = {
  theme: ThemeType;
};
