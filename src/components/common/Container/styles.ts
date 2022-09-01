import styled, { css } from 'styled-components';

interface StyledContainerProps {
  bgImage?: string;
  height?: string;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  height: ${({ height }) => (!height ? '110px' : height)};
  width: 100%;
  position: relative;

  background-image: ${({bgImage}) => bgImage && `url(${bgImage})`};
  background-position: center left;
  background-repeat: no-repeat;
  background-size: cover;
`;
