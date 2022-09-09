import { ReactElement } from 'react';

import { StyledContainer } from './styles';

interface ContainerProps {
  bgColor?: string;
  bgImage?: string;
  height?: string;
  children: ReactElement;
}

export function Section({
  bgColor,
  bgImage,
  height = '110px',
  children,
}: ContainerProps) {
  return (
    <StyledContainer height={height} bgImage={bgImage} bgColor={bgColor}>
      {children}
    </StyledContainer>
  );
}
