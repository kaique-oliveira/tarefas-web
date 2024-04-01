import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZE.TITLE};
    font-weight: ${theme.FONT_WEIGHT.LG};
    color: ${theme.COLORS.NEUTRAL_300};
  `}
`;

export const Subtitle = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZE.SUBTITLE};
    font-weight: ${theme.FONT_WEIGHT.MD};
    color: ${theme.COLORS.NEUTRAL_200};
  `}

  &::first-letter {
    text-transform: uppercase;
  }
`;
