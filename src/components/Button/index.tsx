import React from 'react';
import arrow from '../../assets/arrow.svg';

import { Container } from './styles';

interface ButtonProps {
  content: string;
  iconButton?: boolean;
}

function Button(props: ButtonProps) {
  return (
    <Container>
      {props.content} {props.iconButton && <img src={arrow} alt='arrow' />}
    </Container>
  );
}

export default Button;
