import styled from 'styled-components';

export const Container = styled.button`
  padding: 0.6rem 3rem;
  background-color: transparent;
  color: var(--text-color);
  border: solid 1px var(--button);
  border-radius: 0.5rem;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  transition: 0.2s;
  img {
    margin-left: 0.6rem;
    width: 0.5rem;
  }

  &:hover {
    background-color: var(--button);
  }
`;
