import styled, { css } from "styled-components";

type Props = {
  $isShow: boolean;
};

export const Container = styled.div<Props>`
  ${({ $isShow }) =>
    $isShow
      ? css`
          width: 100vw;
          height: 100vh;

          top: 0;
          left: 0;
          z-index: 1;

          overflow-y: hidden;

          animation: fade-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        `
      : css`
          width: 0px;
          height: 0px;

          top: -100px;
          z-index: 0;

          overflow-y: scroll;

          animation: fade-out 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        `}

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px 16px;

  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);

  position: fixed;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes esconder {
    0% {
      width: 100vw;
      height: 100vh;

      top: 0;
      left: 0;
      z-index: 1;
    }
    100% {
      width: 0px;
      height: 0px;

      top: -100px;
      z-index: 0;

      overflow-y: scroll;
    }
  }
`;

export const WrapperContent = styled.div<Props>`
  width: 380px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 16px;
  padding: 16px;

  border-radius: 32px;
  box-shadow: 0px 0px 4px rgb(0, 0, 0, 0.15);
  background-color: ${({ theme }) => theme.COLORS.DEFAULT};

  z-index: 2;

  ${({ $isShow }) =>
    $isShow
      ? css`
          animation: slide-bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        `
      : css`
          animation: slide-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        `}

  @keyframes slide-bottom {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @keyframes slide-top {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-100px);
      opacity: 0;
      display: none;
    }
  }
`;

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZE.SUBTITLE};
    font-weight: ${theme.FONT_WEIGHT.LG};
    color: ${theme.COLORS.NEUTRAL_200};
  `}

  margin-bottom:16px;
`;

export const WrapperButtons = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 32px;
  margin-top: 16px;

  & > :first-child {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.COLORS.NEGATIVE};

    span {
      color: ${({ theme }) => theme.COLORS.NEGATIVE};
    }
  }
`;
