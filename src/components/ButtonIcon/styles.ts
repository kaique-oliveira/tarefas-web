import styled, { css } from "styled-components";

export type PropButtonType = "default" | "active";

export type Props = {
  $variant: PropButtonType;
};

export const Container = styled.button<Props>`
  ${({ $variant, theme }) =>
    $variant === "default"
      ? css`
          background-color: ${theme.COLORS.NEUTRAL_100};

          & > svg {
            color: ${theme.COLORS.NEUTRAL_300};
            font-size: 20px;
          }

          &:hover {
            box-shadow: 0px 0px 4px rgb(0, 0, 0, 0.15);
            background-color: ${({ theme }) => theme.COLORS.PRIMARY_HOVER};
          }
        `
      : css`
          background-color: ${theme.COLORS.PRIMARY};

          & > svg {
            color: white;
            font-size: 20px;
          }

          &:hover {
            box-shadow: 0px 0px 4px rgb(0, 0, 0, 0.15);
            background-color: ${({ theme }) => theme.COLORS.PRIMARY_HOVER};
          }
        `}

  width: 40px;
  height: 40px;

  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  outline: none;
  border: 1px solid transparent;

  &:hover {
    box-shadow: 0px 0px 4px rgb(0, 0, 0, 0.15);

    svg {
      transition: all 0.3s;
      transform: scale(1.03);
    }
  }
`;
