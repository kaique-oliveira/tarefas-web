import styled, { css } from "styled-components";

type PropsCircle = {
  $variant: "light" | "dark";
};

export const Container = styled.label`
  width: 58px;
  height: 30px;

  transition: all 0.9s;

  display: flex;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;

  border-radius: 28px;
  padding: 2px;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_100};
  box-shadow: 0px 0px 4px rgb(0, 0, 0, 0.15);

  & > input {
    display: none;
  }
`;

export const Circle = styled.label<PropsCircle>`
  width: 28px;
  height: 28px;

  border-radius: 50%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s;

  svg {
    color: white;
  }

  ${({ $variant }) =>
    $variant === "light"
      ? css`
          margin-left: 0px;
          background-color: #ffba08;
        `
      : css`
          margin-left: 26px;
          background-color: #4600a1;
        `}
`;
