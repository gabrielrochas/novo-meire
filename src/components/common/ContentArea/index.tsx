import { ReactElement } from 'react';

import { Container } from './styles';

interface ContainerProps {
  containerPadding?: string;
  justifyContent?: string;
  children: ReactElement;
}
export function Content({
  containerPadding,
  justifyContent,
  children,
}: ContainerProps) {
  return (
    <Container
      containerPadding={containerPadding}
      justifyContent={justifyContent}
    >
      {children}
    </Container>
  );
}
