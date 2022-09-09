import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

interface StyledContainerProps {
  bgColor?: string;
  bgImage?: string;
  height?: string;
}

export const StyledContainer = styled.section<StyledContainerProps>`
  height: ${({ height }) => (!height ? '110px' : height)};
  width: 100%;
  position: relative;

  background-color: ${({bgColor}) => !!bgColor ? bgColor : theme.colors['white']};
  background-image: ${({bgImage}) => bgImage && `url(${bgImage})`};
  background-position: center left;
  background-repeat: no-repeat;
  background-size: cover;
`;
