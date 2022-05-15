import styled, { css } from 'styled-components';

interface ContainerProps {
  isTop: boolean;
}

export const Desktop = styled.div`
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
  top: 70%;
  left: 50%;

  transform: translate(-50%, -50%);

  @media (max-width: 520px) {
    display: block;
  }
`;
