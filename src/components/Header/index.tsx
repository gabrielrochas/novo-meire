import { ReactElement } from 'react';

import { Content, Container } from '../common'

interface HeaderProps {
  children: ReactElement;
}
export function Header({ children }: HeaderProps) {
  return (
    <Container height='100px'>
      <Content containerPadding='8px' >{children}</Content>
    </Container>
  );
}
