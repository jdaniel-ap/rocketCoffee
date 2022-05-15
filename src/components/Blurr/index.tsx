import React from 'react';
import BlurrItem from '../BlurrItem';
import { Container } from './styles';

export function Blurr() {
  return (
    <Container>
      <BlurrItem isTop />
      <BlurrItem isTop={false} />
    </Container>
  );
}
