import { ReactElement } from 'react';

import { Section } from '../common';

interface HeroProps {
  bgImage: string;
  children: ReactElement;
}

export function Hero({ bgImage, children }: HeroProps) {
  return (
    <Section bgImage={bgImage} height='500px'>
      {children}
    </Section>
  );
}
