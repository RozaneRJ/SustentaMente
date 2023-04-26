import styled from 'styled-components/native';

import {getThemeColor} from '../../theme';
import EmptySvg from '../../assets/svg/empty.svg';

export const EmptyContainer = styled.View`
  flex: 1;
  padding: 20px;
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
