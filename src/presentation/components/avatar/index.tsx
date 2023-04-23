import * as React from 'react';
import {ImageSourcePropType} from 'react-native';

import {Image} from './styles';

export type AvatarProps = {
  source: ImageSourcePropType;
  size?: number;
  rounded?: number;
};

export const Avatar: React.FC<AvatarProps> = React.memo(
  ({source, size, rounded}) => {
    return <Image source={source} size={size} rounded={rounded} />;
  },
);
