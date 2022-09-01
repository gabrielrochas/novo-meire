import Image from 'next/image';

import LogoMeire from '../../../../public/images/logo_meire.png';

import { ImageContainer } from './styles';

export function Logo() {
  return (
    <ImageContainer>
      <Image src={LogoMeire} alt="logo meire cortinas" />
    </ImageContainer>
  );
}
