import * as React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';

import DarkTheme from './dark';
import LightTheme from './light';
import {ThemeColors, ThemeProps, ThemeType} from './types';

export const themes = {
  dark: DarkTheme,
  light: LightTheme,
};

const Context = React.createContext<Required<ThemeType>>(LightTheme);

export const getThemeColor =
  (color: keyof ThemeColors) =>
  ({theme}: {theme: ThemeType}) =>
    theme.colors[color];

export const getThemeShadow = () => ({
  shadowColor: getThemeColor('shadow'),
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.12,
  shadowRadius: 3.84,
  elevation: 5,
});

export const useTheme = (): Required<ThemeType> => React.useContext(Context);

export const useThemeCurrent = () => {
  const deviceColorSchema = useColorScheme();
  const theme = deviceColorSchema ? themes[deviceColorSchema] : themes.light;

  return {
    ...theme,
    getThemeColor,
  };
};

export const Theme: React.FC<React.PropsWithChildren<ThemeProps>> = ({
  children,
  theme,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={theme}>{children}</Context.Provider>
    </ThemeProvider>
  );
};
