import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30rem;
  animation: showsup 0.5s ease-out;

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

  h3 {
    font-size: 30px;
    font-weight: 400;
    padding: 1rem;
    display: none;
  }

  .coffee {
    width: 30rem;
    max-height: 100%;
    max-width: 100%;
    position: absolute;
    bottom: 0;
    animation: shake 0.5s linear;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 520px) {
    h1 {
      display: none;
    }

    h3 {
      display: block;
      margin-bottom: 10rem;
      line-height: 4rem;
      letter-spacing: 0.1rem;
    }

    .mobile {
      display: block;
    }
  }

  @keyframes showsup {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-15deg);
    }
    50% {
      transform: rotate(15deg);
    }
    75% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
