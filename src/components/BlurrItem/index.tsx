import BlurrImgA from '../../assets/blur-1.png';
import BlurrImgB from '../../assets/blur-2.png';

import { Container } from './styles';

interface BlurrItemProps {
  isTop: boolean;
}

function BlurrItem({ isTop }: BlurrItemProps) {
  return (
    <Container isTop={isTop}>
      <img src={isTop ? BlurrImgB : BlurrImgA} alt='blurr' />
    </Container>
  );
}

export default BlurrItem;
