import styled, { css } from 'styled-components';

interface ContainerProps {
  isTop: boolean;
  seconds?: number;
}

export const Desktop = styled.div`
  animation: showsup linear ${({ seconds }) => `${seconds}s`};
  position: absolute;
  z-index: -1;
  ${(props: ContainerProps) =>
    props.isTop
      ? css`
          top: -25%;
          right: 0;
        `
      : css`
          bottom: 0;
          left: -10%;
        `}

  @media (max-width: 620px) {
    display: none;
  }
`;

export const Mobile = styled.div`
  display: none;
  position: absolute;
  z-index: -1;
  bottom: -5%;

  img {
    max-height: 100%;
    max-width: 100%;
  }

  @media (max-width: 520px) {
    display: block;
  }

  @keyframes showsup {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
