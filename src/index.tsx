import * as React from 'react';
import {StatusBar} from 'react-native';

import {Navigation} from './presentation/navigation';
import {Theme, useThemeCurrent} from './presentation/theme';

const App: React.FC = () => {
  const theme = useThemeCurrent();

  return (
    <Theme theme={theme}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={theme.colors.statusBar}
      />
      <Navigation />
    </Theme>
  );
};

export default React.memo(App);
