import { ReactElement } from 'react';

import { Content, Container } from '../common';

interface HeroProps {
  bgImage: string;
  children: ReactElement;
}

export function Hero({ bgImage, children }: HeroProps) {
  return (
    <Container bgImage={bgImage} height='500px'>
      <Content justifyContent="center">{children}</Content>
    </Container>
  );
}
