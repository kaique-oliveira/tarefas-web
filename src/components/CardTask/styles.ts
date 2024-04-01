import { css, styled } from "styled-components";
import { Circle, RadioButton } from "@phosphor-icons/react";

export const Container = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
`;

export const WrapperTask = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_100};
  border-radius: 24px;
  padding: 16px;

  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 0px 2px rgb(0, 0, 0, 0.1);
  }
`;

export const IconDefault = styled(Circle)`
  font-size: 20px;
  cursor: pointer;

  color: ${({ theme }) => theme.COLORS.PRIMARY};
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const IconConcluded = styled(RadioButton)`
  font-size: 20px;
  cursor: pointer;

  color: ${({ theme }) => theme.COLORS.PRIMARY};

  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const WrapperLineRadio = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  gap: 10px;
`;

export const Line = styled.div`
  width: 1px;
  height: 60%;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const WrapperContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 2px;

  & > button {
    width: max-content !important;
    height: max-content !important;

    box-shadow: none !important;
    background-color: transparent !important;
    opacity: 0;

    svg {
      color: ${({ theme }) => theme.COLORS.NEGATIVE} !important;
    }
  }
`;

export const WrapperAction = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > button {
    width: max-content !important;
    height: max-content !important;

    box-shadow: none !important;
    background-color: transparent !important;

    svg {
      color: ${({ theme }) => theme.COLORS.NEGATIVE} !important;
    }

    svg:hover {
      color: ${({ theme }) => theme.COLORS.NEGATIVE_HOVER} !important;
    }
  }
`;

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZE.PARAGRAPH};
    font-weight: ${theme.FONT_WEIGHT.LG};
    color: ${({ theme }) => theme.COLORS.NEUTRAL_300};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZE.PARAGRAPH};
    font-weight: ${theme.FONT_WEIGHT.SM};
    color: ${theme.COLORS.NEUTRAL_200};
  `}
`;
