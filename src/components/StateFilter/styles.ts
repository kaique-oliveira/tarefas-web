import styled, { css } from "styled-components";

export type PropStateFilterType = "default" | "active";

export type Props = {
  $variant: PropStateFilterType;
};

export const Container = styled.div<Props>`
  ${({ $variant, theme }) =>
    $variant === "default"
      ? css`
          background-color: ${theme.COLORS.NEUTRAL_100};

          & > svg,
          span {
            color: ${theme.COLORS.NEUTRAL_300};
          }
        `
      : css`
          background-color: ${theme.COLORS.SECONDARY};

          & > svg,
          span {
            color: white;
          }
        `}

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
  border-radius: 32px;
  padding: 8px 16px;

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 0px 4px rgb(0, 0, 0, 0.15);
  }
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZE.PARAGRAPH};
    font-weight: ${theme.FONT_WEIGHT.SM};
  `}
`;
