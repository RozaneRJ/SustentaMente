import styled from 'styled-components/native';

import {getThemeColor} from '../../theme';

export const TitleContainer = styled.View`
  margin: 20px 0;
  padding: 0 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${getThemeColor('header')};
`;

export const ViewAll = styled.TouchableOpacity``;

export const ViewAllLabel = styled.Text`
  font-size: 14px;
  color: ${getThemeColor('primary')};
`;
