'use client';

import { Hydrate, HydrateProps } from '@tanstack/react-query';

export const HydrateClient = (props: HydrateProps) => {
  return <Hydrate {...props} />;
};
