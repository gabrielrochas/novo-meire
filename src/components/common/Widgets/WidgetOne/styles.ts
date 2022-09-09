import styled from 'styled-components';
import { devices } from '../../../../styles/devices';
import { theme } from '../../../../styles/theme';

export const WidgetContainer = styled.div`
  border: 1px solid #ccc;

  min-width: 33%;

  margin-right: 8px;

  &:last-child{
    margin-right: 0;
  }

  @media ${devices.tablet} {
    margin-right: 0;
    margin-bottom: 12px;
    min-width: 370px;
  }
  @media ${devices.mobileM} {
    min-width: 290px;
  }

  & > div {
    padding: 16px;

    @media ${devices.tablet} {
      padding: 8px;
    }
  }
`;

export const HeaderContainer = styled.div`
  border-bottom: 1px solid #ccc;

  h1 {
    color: ${theme.colors['link']};

    text-transform: uppercase;
    font-size: 14px;
  }
`;
