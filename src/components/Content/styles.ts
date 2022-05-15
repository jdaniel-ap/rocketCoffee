import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30rem;

  div:first-child {
    text-align: center;
    margin-top: 3rem;
  }

  h1 {
    font-size: 4rem;

    &:last-child {
      color: var(--background);
      text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button),
        -1px 1px 0 var(--button), 1px 1px 0 var(--button);
    }
  }

  img {
    width: 40rem;
    position: absolute;
    bottom: 0;
  }
`;
