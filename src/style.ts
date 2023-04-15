import styled from 'styled-components/native';

import {getThemeColor} from './presentation/theme';

export const Screen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${getThemeColor('background')};
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${getThemeColor('header')};
`;
