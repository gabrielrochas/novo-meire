import { ReactElement } from 'react';

import { Container, Section } from '../common'

interface HeaderProps {
  children: ReactElement;
}
export function Header({ children }: HeaderProps) {
  return (
    <Section height='100px'>
      <Container containerPadding='8px' >{children}</Container>
    </Section>
  );
}
