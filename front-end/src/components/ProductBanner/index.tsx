import React from 'react';
import { BannerDiv, BannerImage, BannerTitle } from './styles'


// Cria o banner da tela de categoria de produtos
function ProductBanner() {
  return (
    <BannerDiv>
      <BannerImage source={require('../../assets/BannerManga.png')} >
        <BannerTitle>Manga</BannerTitle>
      </BannerImage>
    </BannerDiv>
  )
}

export default ProductBanner;