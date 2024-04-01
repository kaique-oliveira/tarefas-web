import styled, { css } from "styled-components";

export type PropButtonType = "default" | "active" | "text";

export type Props = {
  $variant: PropButtonType;
};

export const Container = styled.button<Props>`
  ${({ $variant, theme }) =>
    $variant === "default"
      ? css`
          background-color: ${theme.COLORS.NEUTRAL_100};

          & > svg,
          span {
            color: ${theme.COLORS.NEUTRAL_300};
          }

          &:hover {
            box-shadow: 0px 0px 4px rgb(0, 0, 0, 0.15);
            background-color: ${({ theme }) => theme.COLORS.PRIMARY_HOVER};
          }
        `
      : $variant === "text"
      ? css`
          background-color: transparent;

          &:hover {
            box-shadow: none;
            background-color: transparent;
          }
        `
      : css`
          background-color: ${theme.COLORS.PRIMARY};

          & > svg,
          span {
            color: white;
          }

          &:hover {
            box-shadow: 0px 0px 4px rgb(0, 0, 0, 0.15);
            background-color: ${({ theme }) => theme.COLORS.PRIMARY_HOVER};
          }
        `}

  height: 40px;

  border-radius: 16px;
  padding: 8px 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  cursor: pointer;
  outline: none;
  border: 1px solid transparent;

  transition: all 0.3s;

  & > svg {
    font-size: ${({ theme }) => theme.FONTS_SIZE.PARAGRAPH};
  }
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZE.PARAGRAPH};
    font-weight: ${theme.FONT_WEIGHT.MD};
  `}
`;
