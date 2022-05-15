import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  color: var(--text-color);
  padding: 2rem 1.5rem;

  @media (max-width: 920px) {
    border-bottom: 1px solid var(--border);
  }
`;

export const Mobile = styled.div`
  width: 100%;
  display: none;

  img {
    width: 10rem;
  }
  img:nth-of-type(2) {
    width: 2rem;
    z-index: 99;
  }

  section {
    position: absolute;
    background-color: black;
    width: 100%;
    height: 90%;
    bottom: 0;
    left: 0;
    z-index: 99;

    ul {
      list-style: none;
      li {
        padding: 1rem;
        border-bottom: 1px solid var(--border);
      }
    }
  }

  @media (max-width: 920px) {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;

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

  @media (max-width: 920px) {
    &:first-child {
      display: none;
    }
  }
`;
