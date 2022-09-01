import styled from 'styled-components';

interface ContainerProps {
  containerPadding?: string;
  justifyContent?: string;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  max-width: 940px;

  margin: 0 auto;
  padding: ${({ containerPadding }) =>
    !containerPadding ? '0' : containerPadding};

  display: flex;
  flex-wrap: wrap;
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  overflow: hidden;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;
