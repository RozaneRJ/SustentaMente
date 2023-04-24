import styled from 'styled-components/native';

import {getThemeColor} from '../../theme';

import EmptySvg from '../../assets/svg/empty.svg';

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

export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyIcon = styled(EmptySvg).attrs(() => {
  return {width: 200};
})``;

export const EmptyText = styled.Text`
  font-size: 14px;
  text-align: center;
  color: ${getThemeColor('text')};
`;

export const EmptyTextBold = styled(EmptyText)`
  font-weight: bold;
`;
