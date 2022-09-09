import { ReactElement } from 'react';

import { Container as StyledContainer } from './styles';

interface ContainerProps {
  containerPadding?: string;
  justifyContent?: string;
  children: ReactElement;
}
export function Container({
  containerPadding,
  justifyContent,
  children,
}: ContainerProps) {
  return (
    <StyledContainer
      containerPadding={containerPadding}
      justifyContent={justifyContent}
    >
      {children}
    </StyledContainer>
  );
}
