import styled from 'styled-components/native';

import {getThemeColor} from '../../theme';
import {iconSize} from '../../utils/icon-size';
import SearchSvg from '../../assets/svg/search.svg';
import NotificationSvg from '../../assets/svg/notification.svg';

export const Container = styled.View`
  padding: 0 10px;
  flex-direction: row;
`;

export const AvatarContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 0 10px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${getThemeColor('text')};
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${getThemeColor('header')};
`;

export const IconsContainer = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled(IconsContainer)``;

export const NotificationContainer = styled(IconsContainer)``;

export const SearchIcon = styled(SearchSvg).attrs(() => iconSize(16))``;

export const NotificationIcon = styled(NotificationSvg).attrs(() =>
  iconSize(16),
)``;
