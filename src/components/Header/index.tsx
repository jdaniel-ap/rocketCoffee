import { useState } from 'react';
import desktopLogo from '../../assets/logo-desktop.svg';
import mobileLogo from '../../assets/logo-mobile.svg';
import menu from '../../assets/menu-buguer-open.svg';
import closeMenu from '../../assets/menu-buguer-close.svg';

import { Container, Content, Mobile } from './styles';
import Button from '../Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
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
          <Button content='Pegar meu café' />
        </Content>
        <Mobile>
          <img src={mobileLogo} alt='Rocket Coffe' />
          <img
            src={isMenuOpen ? closeMenu : menu}
            alt='menu'
            onClick={handleMenu}
          />

          {isMenuOpen && (
            <section>
              <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Recompensas</li>
                <li>Gift Cards</li>
                <li>Lojas</li>
              </ul>
            </section>
          )}
        </Mobile>
      </Container>
    </>
  );
}
