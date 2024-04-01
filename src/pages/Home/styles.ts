import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.DEFAULT};

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const WrapperMain = styled.main`
  height: 100%;

  padding: 48px 0px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 32px;

  @media screen and (max-width: 767px) {
    width: 100%;

    padding: 48px 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    padding: 48px 16px;
  }

  @media screen and (min-width: 1024px) {
    width: 680px;
  }
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

export const WrapperStateFilter = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 32px;
  position: relative;

  & > button {
    position: absolute;
    right: 0;
  }
`;

export const ListTask = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 16px;
  overflow-y: auto;
`;

export const ContainerWeekCalendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  grid-gap: 16px;
`;

export const WeekCalendar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    label {
      color: ${({ theme }) => theme.COLORS.PRIMARY_HOVER};
    }
  }

  & > label {
    &::first-letter {
      text-transform: uppercase;
    }

    cursor: pointer;
  }

  & > :nth-child(1) {
    ${({ theme }) => css`
      font-size: ${theme.FONTS_SIZE.LABEL};
      font-weight: ${theme.FONT_WEIGHT.MD};
      color: ${theme.COLORS.NEUTRAL_200};
    `}
  }

  & > :nth-child(2) {
    ${({ theme }) => css`
      font-size: ${theme.FONTS_SIZE.PARAGRAPH};
      font-weight: ${theme.FONT_WEIGHT.LG};
      color: ${theme.COLORS.NEUTRAL_300};
    `}
  }

  &:has(input:checked) {
    label {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }

  & > input {
    display: none;
  }
`;

export const WrapperEmpty = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    margin-bottom: 8px;

    color: ${({ theme }) => theme.COLORS.NEUTRAL_200};
  }

  span {
    ${({ theme }) => css`
      font-size: ${theme.FONTS_SIZE.PARAGRAPH};
      font-weight: ${theme.FONT_WEIGHT.LG};
      color: ${theme.COLORS.NEUTRAL_300};
    `}
  }

  p {
    ${({ theme }) => css`
      font-size: ${theme.FONTS_SIZE.PARAGRAPH};
      font-weight: ${theme.FONT_WEIGHT.MD};
      color: ${theme.COLORS.NEUTRAL_200};
    `}
  }
`;
