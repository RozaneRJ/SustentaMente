import * as React from 'react';
import {ImageSourcePropType} from 'react-native';

import {Image} from './styles';

export type AvatarProps = {
  source: ImageSourcePropType;
  rounded?: number;
};

export const Avatar: React.FC<AvatarProps> = React.memo(({source, rounded}) => {
  return <Image source={source} rounded={rounded} />;
});
