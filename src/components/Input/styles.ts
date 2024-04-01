import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2px;
`;

export const InputText = styled.input`
  width: 100%;
  height: 40px;

  padding: 0 8px;

  outline: none;
  box-shadow: none;
  border: 1px solid transparent;

  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_100};
  color: ${({ theme }) => theme.COLORS.NEUTRAL_300};
  border-radius: 16px;

  &:focus {
    border-color: ${({ theme }) => theme.COLORS.PRIMARY};
    box-shadow: 0px 0px 4px rgba(0, 127, 244, 0.43);
  }
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZE.LABEL};
    font-weight: ${theme.FONT_WEIGHT.LG};
    color: ${theme.COLORS.NEUTRAL_200};
  `}
`;
