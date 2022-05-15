import React from 'react';
import BlurrItem from '../BlurrItem';

export function Blurr() {
  return (
    <>
      <BlurrItem isTop />
      <BlurrItem isTop={false} />
    </>
  );
}
