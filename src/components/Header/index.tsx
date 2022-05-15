import desktopLogo from '../../assets/logo-desktop.svg';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={desktopLogo} alt='Rocket Coffe' />
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Recompensas</li>
          <li>Gift Cards</li>
          <li>Lojas</li>
        </ul>
        <button type='button'>Pegar meu café</button>
      </Content>
    </Container>
  );
}
