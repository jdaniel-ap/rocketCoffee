import coffeeImg from '../../assets/rocket-coffee.png';

import { Container } from './styles';

export function Hero() {
  return (
    <Container>
      <div>
        <h1>Great Coffee</h1>
        <h1>{'<GreatCode/>'}</h1>
      </div>
      <img src={coffeeImg} alt='' />
    </Container>
  );
}
