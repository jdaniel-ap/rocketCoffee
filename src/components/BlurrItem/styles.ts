import styled, { css } from 'styled-components';

interface ContainerProps {
  isTop: boolean;
}

export const Container = styled.div`
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
`;
