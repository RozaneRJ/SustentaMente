import * as React from 'react';

import {EmptyContainer, EmptyIcon, EmptyText, EmptyTextBold} from './styles';

export type EmptyListProps = {
  category: string;
};

export const EmptyList: React.FC<EmptyListProps> = React.memo(({category}) => {
  return (
    <EmptyContainer>
      <EmptyIcon />
      <EmptyText>
        Desculpe, ainda estamos plantando esta categoria{' '}
        <EmptyTextBold>{`"${category}"`}</EmptyTextBold>
      </EmptyText>
    </EmptyContainer>
  );
});
