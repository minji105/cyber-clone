import styled from "styled-components";
import ShopNow from "./buttons/ShopNow";

const BannerContainer = styled.div`
  height: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas: 
    "grid1 grid1 grid1 grid1"
    "grid1 grid1 grid1 grid1"
    "grid2 grid2 grid3 grid3"
    "grid4 grid5 grid3 grid3";

  img {
    position: absolute;
  }

  .small {
    img {
      height: 100%;
      left: 0;
    }
    &:last-child {
      h2 {
        color: #fff;
      }
      img {
      height: 190px;
      top: 50%;
      transform: translateY(-50%);
      }
    }
  }
`
const Grid = styled.div`
  position: relative;
  grid-area: ${(props) => props.$area};
  background-color: ${(props) => props.$backgroundColor || '#fff'};
  padding: ${(props) => props.$padding || '0'};

  &:first-child img {
    right: 160px;
    bottom: 0;
  }
  &:nth-child(3) img {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`
const Info = styled.div`
  width: ${(props) => props.$width || '143px'};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${(props) => props.$gap || '8px'};

  h1 {
    color: #fff;
    font-weight: 100;
    font-size: 96px;
    line-height: 72px;
    letter-spacing: -1%;
  }
  h2 {
    font-size: ${(props) => props.$h2 || '29px'};
    font-weight: ${(props) => props.$titleWeight || '100'};
    line-height: ${(props) => props.$titleHeight || '40px'};
  }
  p {
    color: #909090;
    font-size: ${(props) => props.p || '14px'};
    line-height: 24px;
  }
  .beyond {
    font-weight: 600;
    font-size: 25px;
    line-height: 32px;
  }
`

function Banner() {
  return (
    <BannerContainer>
      <Grid
        $area={'grid1'}
        $backgroundColor={'#211C24'}
        $padding={'0 160px 0 160px'}>
        <img src="/imgs/topBanner/Iphone.png" alt="Iphone Pro 14" />
        <Info
          $gap={'24px'}
          $width={'714px'}
          $p={'18px'}>
          <p className="beyond">Pro.Beyond.</p>
          <h1>IPhone 14 <b>Pro</b></h1>
          <p>Created to change everything for the better. For everyone</p>
          <ShopNow color={'#fff'} />
        </Info>
      </Grid>

      <Grid
        $area={'grid2'}
        $padding={'0 48px 0 334px'}
        className="small">
        <img src="/imgs/topBanner/PlayStation.png" alt="PlayStation 5" />
        <Info
          $gap={'16px'}
          $width={'338px'}
          $h2={'49px'}
          $titleWeight={500}>
          <h2>Playstation 5</h2>
          <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
        </Info>
      </Grid>

      <Grid
        $area={'grid3'}
        $backgroundColor={'#EDEDED'}
        $padding={'44px 264px 44px 56px'}>
        <img src="/imgs/topBanner/MacBook Pro 14.png" alt="MacBook Pro 14" />
        <Info
          $gap={'16px'}
          $width={'360px'}
          $h2={'64px'}
          $titleHeight={'56px'}>
          <h2>Macbook <b>Air</b></h2>
          <p>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
          <ShopNow />
        </Info>
      </Grid>

      <Grid
        $area={'grid4'}
        $backgroundColor={'#EDEDED'}
        $padding={'0 48px 0 156px'}
        className="small">
        <img src="/imgs/topBanner/Airpods.png" alt="Apple Airpods Max" />
        <Info>
          <h2>Apple AirPods <b>Max</b></h2>
          <p>Computational audio. Listen, it's powerful</p>
        </Info>
      </Grid>

      <Grid
        $area={'grid5'}
        $backgroundColor={'#353535'}
        $padding={'0 48px 0 156px'}
        className="small">
        <img src="/imgs/topBanner/Vision.png" alt="Apple Vision Pro" />
        <Info
          $titleWeight={'300'}>
          <h2>Apple Vision <b>Pro</b></h2>
          <p>An immersive way to experience entertainment</p>
        </Info>
      </Grid>
    </BannerContainer>
  );
}

export default Banner;