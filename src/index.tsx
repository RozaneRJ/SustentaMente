import React from 'react';
import {StatusBar} from 'react-native';

import {Theme, useThemeCurrent} from './presentation/theme';

import {Screen, Title} from './style';

const App: React.FC = () => {
  const theme = useThemeCurrent();

  return (
    <Theme theme={theme}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={theme.colors.statusBar}
      />
      <Screen>
        <Title>SustentaMente</Title>
      </Screen>
    </Theme>
  );
};

export default React.memo(App);
