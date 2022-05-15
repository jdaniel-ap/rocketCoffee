import coffeeImg from '../../assets/rocket-coffee.png';
import Button from '../Button';

import { Container } from './styles';

export function Hero() {
  return (
    <Container>
      <div>
        <div className='mobile'>
          <h3>O café que fará seu código decolar para o próximo nível.</h3>
          <Button content='Pegar meu café' iconButton />
        </div>
        <h1>Great Coffee</h1>
        <h1>{'<GreatCode/>'}</h1>
      </div>
      <img className='coffee' src={coffeeImg} alt='' />
    </Container>
  );
}
