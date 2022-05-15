import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  color: var(--text-color);
  margin-top: 3rem;
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 3rem;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;

    li {
      cursor: pointer;
      position: relative;
      padding: 0.5rem 1rem;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 0.1rem;
        transition: 0.2s;
        background-color: var(--button);
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }

  button {
    padding: 0.6rem 2rem;
    background-color: transparent;
    color: var(--text-color);
    border: solid 1px var(--button);
    border-radius: 0.5rem;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    transition: 0.2s;

    &:hover {
      background-color: var(--button);
    }
  }
`;
