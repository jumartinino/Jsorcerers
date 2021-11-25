import React from 'react';
import { BannerDiv, BannerImage, BannerTitle } from './styles'

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