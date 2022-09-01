import { ReactElement } from 'react';

import { StyledContainer } from './styles';

interface ContainerProps {
  bgImage?: string;
  height?: string;
  children: ReactElement;
}

export function Container({
  bgImage,
  height = '110px',
  children,
}: ContainerProps) {
  return (
    <StyledContainer height={height} bgImage={bgImage}>
      {children}
    </StyledContainer>
  );
}
