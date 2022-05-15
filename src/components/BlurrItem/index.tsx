import BlurrImgA from '../../assets/blur-1.png';
import BlurrImgB from '../../assets/blur-2.png';
import BlurrMobile from '../../assets/blur-mobile.png';

import { Desktop, Mobile } from './styles';

function BlurrItem() {
  return (
    <>
      <Mobile>
        <img src={BlurrMobile} alt='blurr' />
      </Mobile>
      <Desktop isTop>
        <img src={BlurrImgB} alt='blurr' />
      </Desktop>
      <Desktop isTop={false}>
        <img src={BlurrImgA} alt='blurr' />
      </Desktop>
    </>
  );
}

export default BlurrItem;
